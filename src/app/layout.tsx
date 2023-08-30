import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import config from '../../config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: config.site_metadata.title,
    description: config.site_metadata.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
