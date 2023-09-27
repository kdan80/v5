import React from 'react'
import { details } from '@/config'
import { NumberedHeading } from '@/components'
import { section, sectionContent, bigButton, paragraph } from '@/styles'
import Link from 'next/link'

const Contact = () => {
    const { email } = details

    return (
        <section
            className={`${section}`}
            id='contact'
        >
            <div className={`${sectionContent} items-center gap-7 md:gap-6`}>
                <div className='flex flex-col items-center gap-1'>
                    <NumberedHeading
                        index={3}
                        overline={true}
                    >
                        What&apos;s Next?
                    </NumberedHeading>

                    <h2 className='font-semibold text-3xl md:text-4xl'>Get In Touch</h2>
                </div>

                <p className={`${paragraph} text-center md:max-w-[60%]`}>
                    Thank you for taking the time to visit my site. If you have a project you wish
                    to discuss, an opportunity for me, or would just like some more information,
                    please do not hesitate to contact me.
                </p>

                <Link
                    className={`${bigButton} mt-4 px-5 py-3`}
                    href={`mailto:${email}`}
                >
                    Contact Me
                </Link>
            </div>
        </section>
    )
}

export default Contact
