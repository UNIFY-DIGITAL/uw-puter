/*
 * Unify Works modification (see MODIFICATIONS.md).
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { codeExpired, noteCodeSent } from './emailCodes.js';

afterEach(() => {
    vi.useRealTimers();
});

describe('email confirmation codes', () => {
    it('accepts a code within its lifetime and refuses it after', () => {
        vi.useFakeTimers();
        noteCodeSent('Jane@Example.com ', '123456');
        const config = { email_code_minutes: 10 };
        expect(codeExpired(config, 'jane@example.com', '123456')).toBe(false);
        vi.advanceTimersByTime(10 * 60 * 1000 + 1);
        expect(codeExpired(config, 'jane@example.com', '123456')).toBe(true);
    });

    it('refuses a code it never saw sent (sent before a restart)', () => {
        expect(codeExpired({}, 'nobody@example.com', '654321')).toBe(true);
    });

    it('never expires a code when the lifetime is 0', () => {
        expect(
            codeExpired({ email_code_minutes: 0 }, 'x@example.com', '1'),
        ).toBe(false);
    });
});
