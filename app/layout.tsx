import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  // 'cyrillic' is included so the scramble noise glyphs render in the one font.
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl = 'https://www.nicolaedogotaru.com/'
const description =
  'I build AI products end to end, from the LLM systems down to the infra that keeps them alive in production.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nicolae Dogotaru // AI Engineer',
  description,
  openGraph: {
    title: 'Nicolae Dogotaru // AI Engineer',
    description,
    type: 'website',
    url: siteUrl,
    siteName: 'Nicolae Dogotaru',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#16181D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <noscript>
          {/* Without JS there is no boot overlay and nothing stays hidden. */}
          <style>{`#boot{display:none!important}[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
