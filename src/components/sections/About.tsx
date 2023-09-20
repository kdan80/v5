import { details } from '@/config'
import { section, sectionContent } from '@/styles'
import NumberedHeading from '../NumberedHeading'

const About = () => {
    const { skills } = details

    return (
        <section
            id='about'
            className={`${section}`}
        >
            <div className={`lg:w-[50rem] xl:w-[55rem] ${sectionContent}`}>
                <NumberedHeading index={1}>About Me</NumberedHeading>

                <p>
                    Hello! My name is Kieran and I enjoy creating things that live on the internet.
                    My interest in web development started back in 2005 when I was making custom
                    themes for myspace profiles. Fast-forward to today and I enjoy building
                    full-featured websites and apps using modern design principles and tools.
                </p>

                <p>
                    I am a self-taught developer from Tayside, Scotland and I am currently looking
                    to secure a position as a junior developer to further my own knowledge and
                    abilities. My ultimate career aspiration is to become a backend, or full-stack
                    engineer, and a project leader.
                </p>

                <p>Here are some of the tools and technologies that I use;</p>

                <ul className='flex flex-col flex-wrap max-w-[600px] max-h-[180px] md:max-h-[200px] gap-2 mt-4 mb-20'>
                    {skills &&
                        skills.map((skill, index) => (
                            <li
                                className='flex items-center gap-1.5 font-mono text-sm md:text-base text-light-900'
                                key={index}
                            >
                                <span className='text-green text-xs'>*</span>
                                <span>{skill}</span>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    )
}

export default About
