import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import appCss from '@repo/ui/styles/global.css?url'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

const queryClient = new QueryClient()

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Tanstack Start Todo Project',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        {/* <TanStackDevtools */}
        {/*   config={{ */}
        {/*     position: 'bottom-right', */}
        {/*   }} */}
        {/*   plugins={[ */}
        {/*     { */}
        {/*       name: 'Tanstack Router', */}
        {/*       render: <TanStackRouterDevtoolsPanel />, */}
        {/*     }, */}
        {/*   ]} */}
        {/* /> */}
        <Scripts />
      </body>
    </html>
  )
}
