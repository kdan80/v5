import React from 'react'
import { details } from '@/config'
import Link from 'next/link'

interface Props {
    scrolledToTop: boolean
}

const SocialsList = ({ scrolledToTop }: Props) => {
    React.useEffect(() => {}, [scrolledToTop])

    return (
        <aside
            className={`fixed bottom-0 md:left-0 transition-all duration-300 px-6 lg:px-12 py-8 ease-in-out ${
                !scrolledToTop && 'translate-y-full'
            }`}
        >
            <nav className='flex justify-start items-center gap-14 md:gap-10'>
                {details.socialLinks.map(({ url, icon: Icon }, index) => (
                    <Link
                        key={index}
                        className='socialLink opacity-0'
                        target='_blank'
                        rel='noreferrer'
                        href={url}
                    >
                        <Icon />
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default SocialsList
