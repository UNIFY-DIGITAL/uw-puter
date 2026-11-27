/*
 * Unify Works modification (see MODIFICATIONS.md).
 */

import { describe, expect, it } from 'vitest';
import type { IConfig } from '../../types';
import { brandTemplates } from './branding';
import { EMAIL_TEMPLATES } from './templates';

const config = (extra: Record<string, unknown> = {}) =>
    ({
        origin: 'https://suite.example',
        support_email: 'help@suite.example',
        gui_params: { brand_name: 'Acme Suite' },
        ...extra,
    }) as unknown as IConfig;

describe('brandTemplates', () => {
    it("leaves Puter's templates unchanged without a brand", () => {
        expect(brandTemplates({} as IConfig, EMAIL_TEMPLATES)).toBe(EMAIL_TEMPLATES);
    });

    it("puts the brand, support address and origin in place of Puter's", () => {
        const all = JSON.stringify(brandTemplates(config(), EMAIL_TEMPLATES));
        expect(all).not.toMatch(/\bPuter\b|support@puter\.com|https:\/\/puter\.com/);
        expect(all).toContain('Acme Suite');
    });

    it('uses a template of its own, with {{brand}} and {{minutes}} filled in', () => {
        const out = brandTemplates(
            config({
                email_code_minutes: 7,
                email_templates: {
                    email_verification_code: {
                        subject: '{{code}} is your {{brand}} code',
                        html: '<p>Expires in {{minutes}} minutes.</p>',
                    },
                },
            }),
            EMAIL_TEMPLATES,
        );
        expect(out.email_verification_code.subject).toBe('{{code}} is your Acme Suite code');
        expect(out.email_verification_code.html).toBe('<p>Expires in 7 minutes.</p>');
        expect(out.email_verification_code.text).toBeUndefined();
    });
});
