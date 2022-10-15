# Bug Info

## Status

I've been following https://remix.run/docs/en/v1/tutorials/blog tutorial and have gotten to the point where I am updating `app/models/post.server.ts` to read from the SQLite database:

```ts
import { prisma } from "~/db.server";

export async function getPosts() {
  return prisma.post.findMany();
}
```

## Error

Now, when running `npm run dev`, we now see:

<details>

```
➤ npm run dev

> dev
> remix build && run-p "dev:*"

Building Remix app in production mode...
Built in 191ms

> dev:wrangler
> cross-env NODE_ENV=development wrangler pages dev ./public


> dev:remix
> remix watch

🚧 'wrangler pages <command>' is a beta command. Please report any issues to https://github.com/cloudflare/wrangler2/issues/new/choose
Compiling worker to "/var/folders/3n/3dct2kb54xn1882dpbw0vbdh0000gn/T/functionsWorker-0.1040096345240078.js"...
Watching Remix app in development mode...
Compiled Worker successfully.
▲ [WARNING] Passing --inspect is unnecessary, now you can always connect to devtools.


╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ [b] open a browser, [d] open Devtools, [c] clear console, [x] to exit                                               │
Compiled Worker successfully.
Compiled Worker successfully.
╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ [b] open a browser, [d] open Devtools, [c] clear console, [x] to exit                                               │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
Starting inspector on 0.0.0.0:9229 failed: address already in use

/private/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/functions/[[path]].js:15238
            throw new ot(`Datasource "${r}" references an environment variable "${o}" that is not set`, { clientVersion: this.clientVersion });
                  ^
InvalidDatasourceError: Datasource "db" references an environment variable "DATABASE_URL" that is not set
    at gr.resolveDatasourceURL (/private/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/functions/[[path]].js:15238:19)
    at gr.extractHostAndApiKey (/private/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/functions/[[path]].js:15207:94)
    at new DataProxyEngine (/private/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/functions/[[path]].js:15135:27)
    at t.getEngine (/private/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/functions/[[path]].js:17214:20)
    at new PrismaClient (/private/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/functions/[[path]].js:17195:1165)
    at /private/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/functions/[[path]].js:19676:43
    at SourceTextModule.evaluate (node:internal/vm/module:226:23)
    at VMScriptRunner.runAsModule (/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/node_modules/@miniflare/runner-vm/src/index.ts:38:18)
    at VMScriptRunner.run (/Users/alukach/Projects/cloudflare-pages-remix-prisma-issue/node_modules/@miniflare/runner-vm/sr
✘ [ERROR] Miniflare process exited with code 1
```

</details>

Reviewing this similar [Prisma issue](https://github.com/prisma/prisma/issues/13771#issuecomment-1204295665), I am bumping into the exact `InvalidDatasourceError: Datasource "db" references an environment variable "DATABASE_URL" that is not set.` error that they are helpfully throwing. 

I'm unsure how to resolve this error, how does someone access the `env` object when instantiating the `PrismaClient` in `app/db.server.ts`.