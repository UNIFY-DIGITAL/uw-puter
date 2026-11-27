# uw-puter

Unify Works' modified version of [Puter](https://github.com/HeyPuter/puter), the
open-source internet computer. It is the Puter server and desktop that the
Unify Works suite runs on.

> **This software is a modified version of Puter software and is not endorsed by Puter Technologies Inc.**
> Puter is a trademark of Puter Technologies Inc.

- **What we changed, and why:** [MODIFICATIONS.md](MODIFICATIONS.md). Every
  change is an ordinary commit on the `unify/main` branch, on top of Puter's
  own history.
- **Based on:** Puter commit `3160b99f` (HeyPuter/puter).
- **Licence:** AGPL-3.0, as Puter ([LICENSE.txt](LICENSE.txt)). Puter's
  copyright and licence notices are kept.
- **Running it:** as Puter: [doc/self-hosting.md](doc/self-hosting.md), with
  this repository's image (`docker build -t uw-puter .`) in place of
  `ghcr.io/heyputer/puter`. Without further settings it behaves as Puter does.

---

*Puter's own README follows (its logo images removed, as Puter's trademark
policy asks of modified versions).*


<h3 align="center">The Open-Source Internet Computer!</h3>

<p align="center">
    <a href="https://puter.com/?ref=github.com"><strong>« LIVE DEMO »</strong></a>
    <br />
    <br />
    <a href="https://puter.com/?ref=github.com">Puter.com</a>
    ·
    <a href="https://apps.puter.com/">App Store</a>
    ·
    <a href="https://builder.puter.com/">AI Builder</a>
    ·
    <a href="https://developer.puter.com" target="_blank">Developers</a>
    ·
    <a href="https://twitter.com/HeyPuter">X</a>
</p>


<br/>

## Puter

Puter is an advanced, open-source, self-hostable internet computer designed to be feature-rich, fast, and highly extensible.

### For Users
Puter's goal is to provide you with every app and feature you need to work, create, and play under one roof. From a simple [Notepad](https://online-notepad.com) and [Voice Recorder](https://voice-recorder.com) to [Spreadsheet](https://apps.puter.com/app/spreadsheet) and [Camera](https://online-camera.com), Puter wants to be the all-in-one solution for your digital life.


### For Developers

Puter provides everything you need to build and publish web apps and games. From [AI](https://developer.puter.com/ai/) to [Cloud Storage](https://developer.puter.com/object-storage/) and [Database](https://developer.puter.com/key-value-database/) to [Serverless Workers](https://developer.puter.com/serverless-workers/), Puter has you covered. Puter also helps you get users! Once you build your app, you can publish it on our [App Store](https://apps.puter.com/) to reach and monetize users.

<br/>

## Getting Started


### 💻 Local Development

```bash
git clone https://github.com/HeyPuter/puter
cd puter
npm install
npm start
```
**→** This should launch Puter at  http://puter.localhost:4100

To run this checkout with Docker, follow [Building from source](./doc/self-hosting.md#building-from-source-instead-of-pulling). Create a local `docker-compose.override.yml` to select the local build; keeping these settings out of `docker-compose.yml` avoids conflicts when pulling updates and keeps local configuration out of pull requests.


<br/>

### 🚀 Self-Hosting

#### Linux/macOS

```bash
curl -fsSL https://puter.com/selfhost | sh
```

#### Windows

```powershell
irm https://puter.com/selfhost?os=windows | iex
```

**→** For more details, see [Self-Hosting Puter](./doc/self-hosting.md).

<br/>

### ☁️ Puter.com

Puter is available as a hosted service at [**puter.com**](https://puter.com).

<br/>

## Support

Connect with the maintainers and community through these channels:

- Bug report or feature request? Please [open an issue](https://github.com/HeyPuter/puter/issues/new/choose).
- X (Twitter): [x.com/HeyPuter](https://x.com/HeyPuter)
- Security issues or abuse reports? [security@puter.com](mailto:security@puter.com)
- Email maintainers at [hi@puter.com](mailto:hi@puter.com)

We are always happy to help you with any questions you may have. Don't hesitate to ask!

<br/>

## License

This repository, including all its contents, sub-projects, modules, and components, is licensed under [AGPL-3.0](https://github.com/HeyPuter/puter/blob/main/LICENSE.txt) unless explicitly stated otherwise. Third-party libraries included in this repository may be subject to their own licenses.

<br/>

## Translations

- [Arabic / العربية](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.ar.md)
- [Armenian / Հայերեն](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.hy.md)
- [Bengali / বাংলা](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.bn.md)
- [Chinese / 中文](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.zh.md)
- [Danish / Dansk](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.da.md)
- [English](https://github.com/HeyPuter/puter/blob/main/README.md)
- [Farsi / فارسی](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.fa.md)
- [Finnish / Suomi](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.fi.md)
- [French / Français](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.fr.md)
- [German /  Deutsch](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.de.md)
- [Hebrew/ עברית](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.he.md)
- [Hindi / हिंदी](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.hi.md)
- [Hungarian / Magyar](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.hu.md)
- [Indonesian / Bahasa Indonesia](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.id.md)
- [Italian / Italiano](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.it.md)
- [Japanese / 日本語](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.jp.md)
- [Korean / 한국어](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.ko.md)
- [Malay / Bahasa Malaysia](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.my.md)
- [Malayalam / മലയാളം](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.ml.md)
- [Dutch / Nederlands](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.nl.md)
- [Polish / Polski](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.pl.md)
- [Odia / ଓଡ଼ିଆ](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.od.md)
- [Portuguese / Português](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.pt.md)
- [Punjabi / ਪੰਜਾਬੀ](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.pa.md)
- [Romanian / Română](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.ro.md)
- [Russian / Русский](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.ru.md)
- [Spanish / Español](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.es.md)
- [Swedish / Svenska](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.sv.md)
- [Tamil / தமிழ்](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.ta.md)
- [Telugu / తెలుగు](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.te.md)
- [Thai / ไทย](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.th.md)
- [Turkish / Türkçe](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.tr.md)
- [Ukrainian / Українська](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.ua.md)
- [Urdu / اردو](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.ur.md)
- [Vietnamese / Tiếng Việt](https://github.com/HeyPuter/puter/blob/main/doc/i18n/README.vi.md)
