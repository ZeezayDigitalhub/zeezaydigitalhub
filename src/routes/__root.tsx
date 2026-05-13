import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page doesn't exist or has moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-gold)] transition">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex gap-2 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent/10">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ZeezayDigital — Shopify Growth & Ecommerce Marketing Specialist" },
      { name: "description", content: "Shopify growth expert helping ecommerce brands increase conversions, recover lost sales, and scale profitably with CRO, SEO, paid ads, and high-converting email marketing." },
      { name: "author", content: "ZeezayDigital" },
      { property: "og:title", content: "ZeezayDigital — Shopify Growth & Ecommerce Marketing Specialist" },
      { property: "og:description", content: "Shopify growth expert helping ecommerce brands increase conversions, recover lost sales, and scale profitably with CRO, SEO, paid ads, and high-converting email marketing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ZeezayDigital — Shopify Growth & Ecommerce Marketing Specialist" },
      { name: "twitter:description", content: "Shopify growth expert helping ecommerce brands increase conversions, recover lost sales, and scale profitably with CRO, SEO, paid ads, and high-converting email marketing." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cc9527d1-bf24-4af0-83d0-daf05836475c/id-preview-de761177--bf634ebb-a678-4710-96fd-08fdf2ea70c5.lovable.app-1778558094529.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cc9527d1-bf24-4af0-83d0-daf05836475c/id-preview-de761177--bf634ebb-a678-4710-96fd-08fdf2ea70c5.lovable.app-1778558094529.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
