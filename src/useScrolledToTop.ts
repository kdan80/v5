import React from 'react'

// This hook determines when an element has scrolled to the top of the viewport and is 100% visible
// It uses intersection observer to monitor the element
// The element is passed by ref when initializing the hook
// OFFSET_TOP an additional margin where scrolledToTop will be considered true
// ie scrolling 100px from the top will still be considered scrolledToTop = true

const OFFSET_TOP = '0px'

const useScrolledToTop = (ref: React.RefObject<HTMLSelectElement | null>) => {
    const [scrolledToTop, setScrolledToTop] = React.useState(true)

    React.useEffect(() => {
        if (!ref.current) return
        const element = ref.current

        const cb = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries

            setScrolledToTop(entry.isIntersecting)
        }

        const observer = new IntersectionObserver(cb, {
            rootMargin: `${OFFSET_TOP} 0px 0px 0px`,
            // due to the way that chrome/safari calculate the viewport height we must use a threshold < 1
            // Using a threshold of 1 means 100vh will never fully be in the viewport on chrome/safari
            // and consequently scrolledToTop will always be false on those platforms (we could also use 95vh but that would mess with the ui)
            threshold: 0.92,
        })

        observer.observe(element)

        return () => observer.unobserve(element)
    }, [ref])

    return scrolledToTop
}

export default useScrolledToTop
