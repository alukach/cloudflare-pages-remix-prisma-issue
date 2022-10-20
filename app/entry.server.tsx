import type { EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { injectStyles, createStylesServer } from "@mantine/remix";

const server = createStylesServer();

function dynamicFavicon(url: URL): Response {
  const darkMode = url.searchParams.has("dark");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
      <svg width="752pt" height="752pt" version="1.1" viewBox="135 135 485 485" xmlns="http://www.w3.org/2000/svg">
      <g fill="${darkMode ? "white" : "black"}">
        <path d="m587.04 433.42h-26.641l-24.566-153.62c-0.88672-5.3281-5.625-9.4727-10.953-9.4727h-16.574l0.003906-55.645c0-6.2148-5.0312-11.246-11.246-11.246h-21.605c-2.0703 0-4.1445 0.59375-6.2148 1.7773l-11.543 7.6953-22.199-8.582c-3.5508-1.1836-7.3984-0.88672-10.359 1.1836s-4.7344 5.625-4.7344 9.1758v55.941l-140.01-0.003906v-10.953h30.781c6.2148 0 11.246-5.0312 11.246-11.246v-50.613c0-6.2148-5.0312-11.246-11.246-11.246h-83.766c-6.2148 0-11.246 5.0312-11.246 11.246v50.613c0 6.2148 5.0312 11.246 11.246 11.246h30.781v10.953h-30.781c-5.3281 0-10.062 3.8477-10.953 9.4727l-24.566 153.62h-26.641c-6.2148 0-11.246 5.0312-11.246 11.246v109.52c0 6.2148 5.0312 11.246 11.246 11.246h421.78c6.2148 0 11.246-5.0312 11.246-11.246v-109.52c-0.28906-6.5117-5.3203-11.543-11.242-11.543zm-348.38-224.65h61.27v28.414h-61.27zm203.93 22.199 12.43 4.7344c3.2578 1.1836 7.1055 0.88672 10.062-1.1836l13.617-8.8789h7.1055v44.695h-43.215zm-205.71 61.859h278.53l22.496 140.89h-323.81zm338.91 250.41h-399.58v-87.316h399.29l-0.003906 87.316z"/>
        <path d="m362.09 488.18h27.824v22.199h-27.824z"/>
        <path d="m483.45 318.58h-104.19c-6.2148 0-11.246 5.0312-11.246 11.246v50.316c0 6.2148 5.0312 11.246 11.246 11.246h104.19c6.2148 0 11.246-5.0312 11.246-11.246v-50.316c-0.29297-6.2109-5.0312-11.246-11.246-11.246zm-11.246 50.617h-81.992v-28.117h81.988z"/>
        <path d="m257.31 318.58h27.824v22.199h-27.824z"/>
        <path d="m301.71 318.58h27.824v22.199h-27.824z"/>
        <path d="m257.31 369.2h72.223v22.199h-72.223z"/>
      </g>
    </svg>`.trim(),
    {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=2419200",
      },
    }
  );
}

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const url = new URL(request.url);
  switch (url.pathname) {
    case "/logo.svg":
      return dynamicFavicon(url);

    default:
      const markup = renderToString(
        <RemixServer context={remixContext} url={request.url} />
      );

      responseHeaders.set("Content-Type", "text/html");

      return new Response(`<!DOCTYPE html>${injectStyles(markup, server)}`, {
        status: responseStatusCode,
        headers: responseHeaders,
      });
  }
}
