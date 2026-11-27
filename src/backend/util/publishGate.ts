/*
 * Unify Works modification (see MODIFICATIONS.md): a server can decide who
 * may publish.
 *
 * Before a website (subdomain) or an app is created or changed, the
 * `publish.validate` event asks listeners (extensions); one that sets
 * `allow` to false refuses it, with `message` as the reason. With no
 * listener, everyone may publish, as in stock Puter.
 */

import type { Actor } from '../core/actor.js';
import { HttpError } from '../core/http/HttpError.js';

export interface PublishValidateEvent {
    allow: boolean;
    /** What is being published. */
    kind: 'website' | 'app';
    action: 'create' | 'update';
    actor: Actor;
    /** Set by a listener that refuses: shown to the person. */
    message?: string;
}

interface EventEmitter {
    emitAndWait(key: string, data: unknown, meta: object): Promise<unknown>;
}

/** Throws 403 when a listener refuses this publish. */
export async function assertMayPublish(
    events: EventEmitter,
    actor: Actor,
    kind: PublishValidateEvent['kind'],
    action: PublishValidateEvent['action'],
): Promise<void> {
    const event: PublishValidateEvent = { allow: true, kind, action, actor };
    await events.emitAndWait('publish.validate', event, {});
    if (!event.allow) {
        throw new HttpError(
            403,
            event.message ?? `You are not allowed to publish ${kind}s here.`,
            { legacyCode: 'forbidden' },
        );
    }
}
