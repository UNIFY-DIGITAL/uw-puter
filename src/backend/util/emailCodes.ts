/*
 * Unify Works modification (see MODIFICATIONS.md): email confirmation codes
 * expire.
 *
 * Puter's codes never expire. The send time of each code is kept in memory,
 * by address and code; one older than config `email_code_minutes`
 * (10 by default; 0: no limit, Puter's behaviour) is refused like a wrong one.
 * After a restart, earlier codes count as expired: the person asks for a new one.
 */

import type { IConfig } from '../types';

const DAY_MS = 24 * 3600 * 1000;
const sent = new Map<string, number>();

const key = (email: unknown, code: unknown) =>
    `${String(email).trim().toLowerCase()}|${String(code)}`;

/** Note that `code` was just sent to `email`. */
export function noteCodeSent(email: unknown, code: unknown): void {
    const now = Date.now();
    for (const [k, at] of sent) if (now - at > DAY_MS) sent.delete(k);
    sent.set(key(email, code), now);
}

/** Whether `code` for `email` is past its lifetime (or was never seen sent). */
export function codeExpired(
    config: Pick<IConfig, 'email_code_minutes'>,
    email: unknown,
    code: unknown,
): boolean {
    const minutes = Number(config.email_code_minutes ?? 10);
    if (!(minutes > 0)) return false;
    const at = sent.get(key(email, code));
    return !at || Date.now() - at > minutes * 60 * 1000;
}
