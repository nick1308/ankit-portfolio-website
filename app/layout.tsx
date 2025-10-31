import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Inter, Space_Grotesk, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Ankit V - Cybersecurity Student & Security Engineer",
  description:
    "Cybersecurity student and aspiring security engineer specializing in penetration testing, secure development, and ethical hacking.",
  keywords: "cybersecurity, ethical hacking, penetration testing, web security, student",
  authors: [{ name: "Ankit V" }],
  openGraph: {
    title: "Ankit V - Cybersecurity Student & Security Engineer",
    description:
      "Cybersecurity student and aspiring security engineer specializing in penetration testing, secure development, and ethical hacking.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light' || 
                    (!localStorage.getItem('theme') && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
