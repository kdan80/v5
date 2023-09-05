import React from 'react'

const useScrolledToTop = (): boolean => {
    const [scrolledToTop, setScrolledToTop] = React.useState(true)

    React.useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.innerWidth > 768) return setScrolledToTop(window.scrollY < 100)
            return setScrolledToTop(window.scrollY === 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrolledToTop
}

export default useScrolledToTop
