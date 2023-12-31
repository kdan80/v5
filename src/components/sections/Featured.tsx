import React from 'react'
import { section, sectionContent } from '@/styles'
import Image from 'next/image'
import Link from 'next/link'
import { Github, External } from '@/icons'
import NumberedHeading from '../NumberedHeading'
import { Project } from '../../types'

interface Props {
    projects: Project[]
}

const Featured = ({ projects }: Props) => {
    return (
        <section
            className={`${section}`}
            id='projects'
        >
            <div className={`gap-8 md:gap-12 ${sectionContent}`}>
                <NumberedHeading
                    className='observer'
                    index={2}
                >
                    Some Things I&apos;ve Built
                </NumberedHeading>
                <ul className='flex flex-col gap-8 md:gap-24'>
                    {projects &&
                        projects.map((project, index) => {
                            const { frontmatter, content } = project
                            const { external, title, tech, github, cover, blurData } = frontmatter
                            const reverseLayout = (index + 1) % 2 === 0
                            return (
                                // I have absolutely no idea why, but wrapping this <li> element in a div fixes a bug on safari
                                // where the content is overflowing and no amount of playing with various heights fixes it
                                // I have labelled the offending div with id="overflowContainer"
                                // A height of 100% should respect the parent elements height, and the parent element should respect the flex rules
                                // However overflowContainer breaches its parent height and I cannot not fix this. Possible safari bug??
                                // Wrapping the whole thing in a div for god knows what reason results in overflowContainer taking the correct height
                                <div key={index}>
                                    <li
                                        className={`observer relative grid grid-cols-12 md:gap-[0.625rem] items-center`}
                                    >
                                        <div
                                            id='overflowContainer'
                                            // prettier-ignore
                                            className={`relative  md:border-2 md:border-medium-800 w-full h-full row-span-full col-span-full rounded md:hover:border-green transition ease-in-out duration-500 overflow-hidden 
                                        ${reverseLayout ? 'md:col-start-5 lg:col-start-6' : 'md:col-end-9 lg:col-end-8'}`}
                                        >
                                            <Link
                                                href={external}
                                                rel='noreferrer'
                                                target='_blank'
                                                className='relative block w-full h-full max-md:pointer-events-none'
                                            >
                                                <Image
                                                    width={2400}
                                                    height={1600}
                                                    src={cover}
                                                    alt={title}
                                                    placeholder='blur'
                                                    blurDataURL={blurData}
                                                    className='w-full h-full blur-sm md:blur-none grayscale-50 hover:grayscale-0 lg:brightness-75 hover:brightness-100 transition ease-in-out duration-500'
                                                />
                                                <div
                                                    className={`absolute top-0 left-0 lg:hidden w-full h-full bg-dark-400 opacity-[92%] md:bg-black md:opacity-50 md:hover:opacity-30 transition duration-500 ease-in-out`}
                                                />
                                            </Link>
                                        </div>

                                        <div
                                            // prettier-ignore
                                            className={`pointer-events-none relative row-span-full flex flex-col px-6 py-8 xs:p-10 md:p-0
                                        ${reverseLayout ? 'col-start-1 col-end-13 md:col-end-9 lg:col-end-7 text-left ' : 'items-start md:items-end col-start-1 md:col-start-5  lg:col-start-7 col-end-13 text-right'}`}
                                        >
                                            <h3
                                                // prettier-ignore
                                                className={`text-green text-sm font-mono`}
                                            >
                                                Featured Project
                                            </h3>
                                            <h2
                                                // prettier-ignore
                                                className={`pointer-events-auto w-fit text-2xl font-semibold mt-1 text-light-200 hover:text-green transition ease-in-out duration-500`}
                                            >
                                                <Link href={external}>{title}</Link>
                                            </h2>
                                            <p
                                                // prettier-ignore
                                                className={`pointer-events-auto text-sm md:bg-dark-600 text-light-300 md:text-light-200 text-justify md:p-5 lg:p-6 my-6 sm:my-8 md:my-4 lg:my-6  rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]
                                            ${reverseLayout ? ' ' : ''}`}
                                                dangerouslySetInnerHTML={{ __html: content }}
                                            />
                                            <ul
                                                className={`flex flex-wrap text-sm text-light-300 md:text-light-200 gap-x-4 gap-y-2 font-mono overflow-hidden ${
                                                    reverseLayout
                                                        ? 'justify-start'
                                                        : 'md:justify-end'
                                                }`}
                                            >
                                                {tech.map((tech, index) => (
                                                    <li key={index}>{tech}</li>
                                                ))}
                                            </ul>
                                            <div
                                                // prettier-ignore
                                                className={`pointer-events-auto flex items-end gap-5 md:gap-4 mt-6 sm:mt-8 md:mt-4 ${reverseLayout ? 'justify-start' : 'justify-end'}`}
                                            >
                                                <Link
                                                    href={github}
                                                    rel='noreferrer'
                                                    target='_blank'
                                                >
                                                    <Github
                                                        // prettier-ignore
                                                        styles={'w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]'}
                                                    />
                                                </Link>
                                                <Link
                                                    href={external}
                                                    rel='noreferrer'
                                                    target='_blank'
                                                >
                                                    <External
                                                        // prettier-ignore
                                                        styles={'w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]'}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            )
                        })}
                </ul>
            </div>
        </section>
    )
}

export default Featured
