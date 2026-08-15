import React from 'react'
import { ClientContext } from '@/components'
import { About, Featured, Contact } from '@/sections'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project } from '../types'

const getProjects = async () => {
    const featuredContentDirectory = path.join(process.cwd(), 'content', 'featured')
    const files = fs.readdirSync(featuredContentDirectory)

    const projects = files.map(file => {
        const projectFilePath = path.join(featuredContentDirectory, file, 'index.md')
        const readFile = fs.readFileSync(projectFilePath, 'utf-8')
        const { data: frontmatter, content } = matter(readFile)
        const { date } = frontmatter

        return {
            frontmatter,
            content,
            date: parseInt(date),
        }
    })

    projects.sort((a, b) => a.date - b.date)

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
