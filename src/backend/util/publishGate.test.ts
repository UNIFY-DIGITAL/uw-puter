/*
 * Unify Works modification (see MODIFICATIONS.md).
 */

import { describe, expect, it } from 'vitest';
import type { Actor } from '../core/actor.js';
import { assertMayPublish, type PublishValidateEvent } from './publishGate.js';

const actor = { user: { id: 1, username: 'jane' } } as unknown as Actor;
const events = (listener?: (e: PublishValidateEvent) => void) => ({
    async emitAndWait(_key: string, data: unknown) {
        listener?.(data as PublishValidateEvent);
    },
});

describe('assertMayPublish', () => {
    it('allows publishing when no listener objects', async () => {
        await expect(
            assertMayPublish(events(), actor, 'website', 'create'),
        ).resolves.toBeUndefined();
    });

    it('refuses with 403 and the listener message', async () => {
        const refuse = (e: PublishValidateEvent) => {
            if (e.kind === 'app') {
                e.allow = false;
                e.message = 'Only administrators publish apps.';
            }
        };
        await expect(
            assertMayPublish(events(refuse), actor, 'app', 'create'),
        ).rejects.toMatchObject({
            statusCode: 403,
            message: 'Only administrators publish apps.',
        });
        await expect(
            assertMayPublish(events(refuse), actor, 'website', 'update'),
        ).resolves.toBeUndefined();
    });
});
