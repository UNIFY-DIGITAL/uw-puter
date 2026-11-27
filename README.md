<h3 align="center"><img width="320" alt="Unify Works" src="doc/assets/unify-works-wordmark.svg"></h3>

<p align="center">
    Your organisation's workspace: files, documents, mail, chat, meetings and business apps, on your own server.
    <br />
    <br />
    <a href="https://unify.works"><strong>Website</strong></a>
    ·
    <a href="https://try.unify.works"><strong>Live demo</strong></a>
    ·
    <a href="mailto:support@unify.works">Support</a>
</p>

> **This software is a modified version of Puter software and is not endorsed by Puter Technologies Inc.**
> Puter is a trademark of Puter Technologies Inc.

## What this repository is

The server and desktop that Unify Works runs on: the open-source
[Puter](https://github.com/HeyPuter/puter) internet computer, modified for
Unify Works. It holds:

- **The server**: accounts and sign-in (email codes, Google, Microsoft,
  Apple), files and sharing, the app platform, email sending, and AI.
- **The desktop**: the web desktop people sign in to, which opens the apps.
- **The SDK** (`src/puter-js`) apps use to reach the server.

The Unify Works apps (Mail, Calendar, Documents, Spreadsheet, Accounting,
CRM and more), the admin tools and the deployment are separate and not
part of this repository.

**Our changes, and why:** [MODIFICATIONS.md](MODIFICATIONS.md). Every
change is an ordinary commit on the `unify/main` branch, on top of Puter's
own history, so comparing a Puter release with `unify/main` shows them all.

## Running it

It runs as Puter does, with this repository's image in place of Puter's:

```bash
docker build -t uw-puter .
```

Then follow [doc/self-hosting.md](doc/self-hosting.md), using `uw-puter` as
the `puter` service's image. Without further settings it behaves as Puter
does; the settings our changes add are listed in MODIFICATIONS.md.

**Requirements:** Docker, 2 GB of memory and 1 GB of disk for a small
install.

## Releases

Each release is tagged `vMAJOR.MINOR.PATCH`, and its notes name the Puter
release it is based on. Taking a new Puter release raises the minor
version; fixes only, the patch version.

## Support

- Website: <https://unify.works>
- Email: <support@unify.works>
- Security issues: <support@unify.works>, with "Security" in the subject.

## Licence

[AGPL-3.0](LICENSE.txt), as Puter. Puter's copyright and licence notices
are kept in the files they belong to. Our changes are licensed under the
same terms.

Puter is © Puter Technologies Inc. Unify Works and its logo are
trademarks of Unify Technologies.
