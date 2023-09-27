import React from 'react'
import {
    landingKeyFrames,
    landingOptions,
    navLinkKeyFrames,
    navLinkOptions,
    homeLinkKeyFrames,
    homeLinkOptions,
} from './animations'

const useLandingAnimations = () => {
    let landingAnimations: () => void

    React.useEffect(() => {
        const homeLink = document.querySelector('#homeLink')
        const hamburger = document.querySelector('#hamburger')
        const navLinks = Array.from(document.querySelectorAll('.navLink'))
        const landingElements: Array<HTMLElement> = Array.from(
            document.querySelectorAll('.landing')
        )

        // Desktop animations
        if (window.innerWidth >= 768) {
            return (landingAnimations = () => {
                // prettier-ignore
                // We don't need to animate the hamburger but we still need to make it visible
                (hamburger as HTMLElement).style.opacity = '100%'

                landingElements.forEach((element, index) => {
                    // @ts-ignore
                    element.animate(landingKeyFrames, {
                        ...landingOptions,
                        delay: index * landingOptions.delay,
                    })
                })

                const landingAnimationDuration =
                    (landingOptions.duration as number) +
                    ((landingElements.length as number) - 1) * 100

                navLinks.forEach((navLink, index) => {
                    // @ts-ignore
                    navLink.animate(navLinkKeyFrames, {
                        ...navLinkOptions,
                        delay: landingAnimationDuration + index * navLinkOptions.delay,
                    })
                })

                const navLinksAnimationDuration =
                    navLinkOptions.duration + (navLinks.length - 1) * 100

                // @ts-ignore
                homeLink?.animate(homeLinkKeyFrames, {
                    ...homeLinkOptions,
                    delay:
                        landingOptions.delay + landingAnimationDuration + navLinksAnimationDuration,
                })
            })
        }

        // Mobile animations
        // animateHeader = () => {
        //     // prettier-ignore
        //     // As with desktop animations we still need to make certian elements visible
        //     (downloadCV as HTMLElement).style.opacity = '100%'
        //     navLinks.forEach(navLink => ((navLink as HTMLElement).style.opacity = '100%'))

        //     homeLink?.animate(homeLinkKeyFrames, {
        //         ...homeLinkOptions,
        //         delay: 100,
        //     })

        //     hamburger?.animate(homeLinkKeyFrames, {
        //         ...homeLinkOptions,
        //         delay: 100,
        //     })
        // }
    }, [])

    return () => landingAnimations()
}

export default useLandingAnimations
