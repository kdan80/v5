export type Project = {
    frontmatter: {
        date: string
        title: string
        cover: string
        blurData: string
        github: string
        external: string
        tech: string[]
    }
    content: string
    date: number
}
