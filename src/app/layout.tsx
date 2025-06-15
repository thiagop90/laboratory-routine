import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppSidebar } from '@/components/app-sidebar'
import { QueryProvider } from '@/components/tanstack-query'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Laboratory Routine',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <main className="flex max-h-dvh w-full overflow-hidden">
            <AppSidebar />
            {children}
            <Toaster />
          </main>
        </QueryProvider>
      </body>
    </html>
  )
}
