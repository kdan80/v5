import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { siteMetadata, openGraph, details, siteConfig } from '@/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.metadataBaseUrl),
    creator: details.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
    keywords: [...siteMetadata.keywords],
    openGraph: {
        title: openGraph.title,
        description: openGraph.description,
        url: openGraph.url,
        siteName: openGraph.siteName,
        images: [...openGraph.images],
        locale: openGraph.locale,
        type: openGraph.type,
    },
    verification: {
        google: 'Imm8ge6Cd1Bc7A8yFSlcqy4yM-GTRj15qdkC01OMfaE',
    },
}

export const viewport: Viewport = {
    themeColor: siteConfig.themeColor,
}

interface Props {
    children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
    return (
        <html lang='en'>
            <body
                className={`${inter.className} selection:bg-darkGreen selection:text-white ${
                    process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
                }`}
            >
                {children}
            </body>
        </html>
    )
}

export default RootLayout
