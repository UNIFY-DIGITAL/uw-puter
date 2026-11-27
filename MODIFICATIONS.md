# Modifications

This software is a modified version of Puter software and is not endorsed by
Puter Technologies Inc.

This file lists how this repository (UNIFY-DIGITAL/uw-puter, branch
`unify/main`) differs from Puter (HeyPuter/puter, commit `3160b99f`), as the
AGPL-3.0 (section 5a) asks. The commits on `unify/main` after `3160b99f` hold
the exact changes; files we added or changed carry a "Unify Works
modification" note.

Every change keeps Puter's behaviour unless its setting is given, except the
fixes marked *fix*, which apply to everyone.

| Date | Change | Where | Setting |
| --- | --- | --- | --- |
| 2026-11-27 | Homepage: a brand logo as the tab icon; the server's own domain in link previews; the default wallpaper is preloaded from Puter's CDN only when it is the wallpaper in use | `src/backend/services/homepage/PuterHomepageService.ts` | `gui_params.brand_logo_url`, `gui_params.brand_wallpaper_url` |
| 2026-11-27 | Homepage: the page's author is the server's company | `src/backend/controllers/homepage/HomepageController.ts` | `gui_params.company`, `gui_params.brand_name` |
| 2026-11-27 | *fix* Sign-up asks for the confirmation code the window that follows expects, not a link | `src/gui/src/UI/UIWindowSignup.js`, `UIWindowSaveAccount.js`, `initgui.js` | – |
| 2026-11-27 | Sign-ups through Google, Microsoft or Apple are named after their email address (jane.doe@ -> jane_doe), not a random name | `src/backend/util/username.ts`, `src/backend/services/auth/OIDCService.ts` | – |
| 2026-11-27 | Email confirmation codes expire | `src/backend/util/emailCodes.ts`, `src/backend/clients/email/EmailClient.ts`, `src/backend/controllers/auth/AuthController.ts` | `email_code_minutes` (10; 0: never) |
| 2026-11-27 | The server's emails carry its brand, support address and links, and its own wording per template | `src/backend/clients/email/branding.ts`, `EmailClient.ts` | `gui_params.brand_name`, `support_email`, `email_templates` |
| 2026-11-27 | An app marked as the preferred opener opens its file types first; listed built-in apps are never offered | `src/backend/services/apps/SuggestedAppsService.ts` | app `metadata.preferred_opener`, `hidden_builtin_apps` |
| 2026-11-27 | *fix* Gemini gets a turn's tool calls back in the order it made them (its thought signature rides on the first) | `src/backend/drivers/ai-chat/providers/gemini/GeminiChatProvider.ts` | – |
| 2026-11-27 | *fix* Tool-call arguments an app sends back are read as an object, not encoded twice (Gemini refuses that) | `src/backend/drivers/ai-chat/utils/Messages.js` | – |
| 2026-11-27 | A server can decide who may create or change websites and apps: the `publish.validate` event, which an extension may refuse | `src/backend/util/publishGate.ts`, `src/backend/drivers/subdomain/SubdomainDriver.ts`, `src/backend/drivers/apps/AppDriver.js` | – (no listener: everyone may, as in Puter) |
| 2026-11-27 | *fix* The Docker image finds the backend's modules (`sharp`), so the server starts | `Dockerfile` | – |
| 2026-11-27 | The settings above, in the configuration's type | `src/backend/types.ts` | – |
