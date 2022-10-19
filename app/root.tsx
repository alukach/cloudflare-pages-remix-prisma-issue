import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import { HeaderAction } from "~/components/Header";
import logo from "~/images/logo.svg";
import { theme } from "~/theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

createEmotionCache({ key: "mantine" });

const headerLinks = [
  {
    link: "#features",
    label: "Features",
  },
  {
    link: "#pricing",
    label: "Pricing",
  },
  {
    link: "#faq",
    label: "FAQ",
  },
  {
    link: "#contact",
    label: "Contact",
  },
];

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <main>
            <HeaderAction links={headerLinks} />

            <Outlet />
          </main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}

export function links() {
  return [
    {
      rel: "icon",
      href: logo,
      type: "image/svg",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@600&display=swap",
    },
  ];
}
