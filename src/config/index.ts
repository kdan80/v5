import siteMetadata from './siteMetadata'
import openGraph from './openGraph'
import { Github, LinkedIn, Codepen } from '@/icons'

const details = {
    name: 'Kieran Dansey',
    email: 'kierandansey80@gmail.com',
    linkedin: 'https://linkedin.com/in/kdansey80',
    github: 'https://github.com/kdan80',
    codepen: 'https://codepen.io/kdan80',
    skills: [
        'HTML',
        'CSS/SASS',
        'Tailwind',
        'Javascript (ES6+)',
        'React/Next.js',
        'Typescript',
        'Node.js/Express',
        'php/Laravel',
        'Linux/Bash',
        'MongoDB',
        'Git/Github',
        'SVG/Inkscape',
    ],

    socialLinks: [
        {
            url: 'https://github.com/kdan80',
            icon: Github,
        },
        {
            url: 'https://linkedin.com/in/kdansey80',
            icon: LinkedIn,
        },
        {
            url: 'https://codepen.io/kdan80',
            icon: Codepen,
        },
    ],
} as const

const siteConfig = {
    themeColor: '#151718',
    navLinks: [
        {
            id: 1,
            name: 'About',
            url: '/#about',
        },
        {
            id: 2,
            name: 'Projects',
            url: '/#projects',
        },
        {
            id: 3,
            name: 'Contact',
            url: '/#contact',
        },
    ],
} as const

export { details, siteMetadata, siteConfig, openGraph }
