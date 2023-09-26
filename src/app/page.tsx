import React from 'react'
import { ClientContext, Header } from '@/components'
import { About, Featured, Contact } from '@/sections'
import fs from 'fs'
import matter from 'gray-matter'
import { Project } from '../types'

const getProjects = async () => {
    const files = fs.readdirSync('content/featured')

    const projects = files.map(file => {
        const readFile = fs.readFileSync(`content/featured/${file}/index.md`, 'utf-8')
        const { data: frontmatter, content } = matter(readFile)
        const { date } = frontmatter
        return {
            frontmatter,
            content,
            date: parseInt(date),
        }
    })

    projects.sort((a: any, b: any) => a.date - b.date)

    return projects as Project[]
}

const Home = async () => {
    const projects = await getProjects()

    return (
        <ClientContext>
            <About />
            <Featured projects={projects} />
            <Contact />
        </ClientContext>
    )
}

export default Home
