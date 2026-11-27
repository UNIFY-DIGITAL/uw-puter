/*
 * Unify Works modification (see MODIFICATIONS.md): a self-hosted server's
 * emails carry its own brand, support address and links.
 */

import type { IConfig } from '../../types';
import type { EmailTemplate, EmailTemplateName } from './templates';

/**
 * The templates as this server sends them. With no brand
 * (gui_params.brand_name) they are Puter's, unchanged. With one: a template
 * given in `email_templates` replaces Puter's wording part by part (an HTML
 * body of its own drops Puter's text part); `{{brand}}`, `{{support}}` and
 * `{{minutes}}` (how long a code lasts) are filled in; and Puter's name,
 * support address and links become the server's.
 */
export function brandTemplates(
    config: IConfig,
    templates: Record<EmailTemplateName, EmailTemplate>,
): Record<EmailTemplateName, EmailTemplate> {
    const brand = (config.gui_params as { brand_name?: unknown } | undefined)
        ?.brand_name;
    if (typeof brand !== 'string' || !brand) return templates;
    const support = config.support_email;
    const origin = config.origin ?? '';
    const minutes = String(config.email_code_minutes ?? 10);
    const fill = (s: string) =>
        s
            .replace(/\{\{\s*brand\s*\}\}/g, () => brand)
            .replace(/\{\{\s*support\s*\}\}/g, () => support ?? '')
            .replace(/\{\{\s*minutes\s*\}\}/g, () => minutes);
    const rebrand = (s: string) => {
        let out = s;
        if (support) out = out.replace(/support@puter\.com/g, () => support);
        return (
            out
                .replace(/https:\/\/puter\.com/g, () => origin)
                .replace(/Puter App Center/g, () => 'App Center')
                // One signature on every email: "Thanks, <brand> Team".
                .replace(
                    /<p>Sincerely,<\/p>\s*<p>Puter<\/p>/g,
                    () => `<p>Thanks,<br>${brand} Team</p>`,
                )
                .replace(
                    /Best,<br \/>\s*The Puter Team/g,
                    () => `Thanks,<br />\n${brand} Team`,
                )
                .replace(/The Puter Team/g, () => `${brand} Team`)
                .replace(/\bPuter\b/g, () => brand)
        );
    };
    const own = config.email_templates ?? {};
    const out = {} as Record<EmailTemplateName, EmailTemplate>;
    for (const [name, template] of Object.entries(templates) as Array<
        [EmailTemplateName, EmailTemplate]
    >) {
        const o = own[name];
        let parts: EmailTemplate = template;
        if (o) {
            parts = {
                subject: o.subject ?? template.subject,
                html: o.html ?? template.html,
            } as EmailTemplate;
            const text = o.text ?? (o.html ? undefined : template.text);
            if (text) parts.text = text;
        }
        out[name] = {
            ...parts,
            subject: rebrand(fill(parts.subject)),
            html: rebrand(fill(parts.html)),
            ...(parts.text ? { text: rebrand(fill(parts.text)) } : {}),
        };
    }
    return out;
}
