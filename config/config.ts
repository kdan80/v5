import { title } from 'process'
import React from 'react'
//import { Github, LinkedIn, Codepen } from 'components/icons'

type NavLink = {
    name: string
    url: string
}

type socialLink = {
    url: string
    icon: React.FC
}

interface Config {
    email: string
    skills: string[]
    siteMetadata: {
        title: string
        description: string
        keywords: string[]
        siteUrl: string
        image: string
    }
    //socialLinks: socialLink[]
    navLinks: NavLink[]
}

const config: Config = {
    email: 'kierandansey80@gmail.com',

    skills: [
        'HTML',
        'CSS/SASS',
        'Tailwind',
        'Javascript (ES6+)',
        'React/Next.js',
        'Typescript',
        'Node.js/Express',
        'Python/Django',
        'php/Laravel',
        'Linux/Bash',
        'MongoDB',
        'Git',
        'SVG/Inkscape',
    ],

    siteMetadata: {
        title: 'Kieran Dansey',
        keywords: ['Kieran Dansey', 'Kieran', 'Dansey', 'Freelance Web Developer', 'Web Developer'],
        description: 'Kieran Dansey freelance web developer',
        siteUrl: 'https://kierandansey.co.uk',
        openGraph: {
            title: title,
            description: description,
            url: siteUrl,
        },
        image: '/images/og.webp',
    },

    // socialLinks: [
    //     {
    //         url: 'https://github.com/kdan80',
    //         icon: Github,
    //     },
    //     {
    //         url: 'https://linkedin.com/in/kdansey80',
    //         icon: LinkedIn,
    //     },
    //     {
    //         url: 'https://codepen.io/kdan80',
    //         icon: Codepen,
    //     },
    // ],

    navLinks: [
        {
            name: 'About',
            url: '/#about',
        },
        {
            name: 'Projects',
            url: '/#projects',
        },
        {
            name: 'Contact',
            url: '/#contact',
        },
    ],
}

export default config
