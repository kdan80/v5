import siteMetadata from './siteMetadata'

const openGraph = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteUrl,
    images: [
        {
            url: '/images/og.png',
            width: 1200,
            height: 630,
        },
        {
            url: '/images/og@2x.png',
            width: 2400,
            height: 1260,
        },
    ],
    locale: 'en_GB',
    type: 'website',
} as const

export default openGraph
