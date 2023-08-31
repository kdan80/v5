import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteMetadata, openGraph, details, siteConfig } from '../../config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.metadataBaseUrl),
    creator: details.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
    keywords: [...siteMetadata.keywords],
    themeColor: siteConfig.themeColor,
    openGraph: {
        title: openGraph.title,
        description: openGraph.description,
        url: openGraph.url,
        siteName: openGraph.siteName,
        images: [...openGraph.images],
        locale: openGraph.locale,
        type: openGraph.type,
    },
}

interface Props {
    children?: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='bg-red-800' />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
