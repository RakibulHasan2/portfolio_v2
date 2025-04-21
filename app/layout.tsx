import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from "sonner";
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedCursor } from '@/components/animated-cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rakibul Hasan | Full Stack Developer',
  description: 'Portfolio of Rakibul Hasan, a Full Stack Developer specializing in modern web applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <AnimatedCursor />
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}