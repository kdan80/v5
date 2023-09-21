import React from 'react'

const THRESHOLD = 500

const useScrolledToTop = (ref: any): boolean => {
    const [scrolledToTop, setScrolledToTop] = React.useState(true)

    React.useEffect(() => {
        const obs = ref.current
        if (!obs) return

        const cb = (entries: any) => {
            const [entry] = entries

            setScrolledToTop(entry.isIntersecting)
        }

        const observer = new IntersectionObserver(cb, {
            rootMargin: '100px 0px 0px 0px',
            threshold: 1,
        })

        observer.observe(obs)

        return () => observer.unobserve(obs)
    }, [ref])

    return scrolledToTop
}

export default useScrolledToTop

// import React from 'react'

// const THRESHOLD = 10

// const useScrolledToTop = (): boolean => {
//     const [scrolledToTop, setScrolledToTop] = React.useState(true)
//     const lastScrollY = React.useRef(0)

//     React.useEffect(() => {
//         const handleScroll = () => {
//             if (window.innerWidth > 768) return setScrolledToTop(window.scrollY < 100)
//             return setScrolledToTop(window.scrollY === 0)
//         }

//         window.addEventListener('scroll', handleScroll)

//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return scrolledToTop
// }

// export default useScrolledToTop
