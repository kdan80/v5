import React from 'react'
import {
    landingKeyFrames,
    landingOptions,
    navLinkKeyFrames,
    navLinkOptions,
    homeLinkKeyFrames,
    homeLinkOptions,
} from './animations'

const useWelcomeAnimations = () => {
    let welcomeAnimations: () => void

    React.useEffect(() => {
        const homeLink = document.querySelector('#homeLink')
        const hamburger = document.querySelector('#hamburger')
        const navLinks = Array.from(document.querySelectorAll('.navLink'))
        const downloadCV = document.querySelector('#downloadCV')
        const landingElements: Array<HTMLElement> = Array.from(
            document.querySelectorAll('.landing')
        )

        const landingAnimations = () => {
            landingElements.forEach((element, index) => {
                // @ts-ignore
                element.animate(landingKeyFrames, {
                    ...landingOptions,
                    delay: index * landingOptions.delay,
                })
            })
        }

        const landingAnimationsDuration =
            (landingOptions.duration as number) + ((landingElements.length as number) - 1) * 100

        // Desktop animations
        if (window.innerWidth >= 768) {
            return (welcomeAnimations = () => {
                // prettier-ignore
                // We don't need to animate the hamburger but we still need to make it visible
                (hamburger as HTMLElement).style.opacity = '100%'

                landingAnimations()

                navLinks.forEach((navLink, index) => {
                    // @ts-ignore
                    navLink.animate(navLinkKeyFrames, {
                        ...navLinkOptions,
                        delay: landingAnimationsDuration + index * navLinkOptions.delay,
                    })
                })

                const navLinksAnimationDuration =
                    navLinkOptions.duration + (navLinks.length - 1) * 100

                // @ts-ignore
                homeLink.animate(homeLinkKeyFrames, {
                    ...homeLinkOptions,
                    delay:
                        landingOptions.delay +
                        landingAnimationsDuration +
                        navLinksAnimationDuration,
                })
            })
        }

        // Mobile animations
        welcomeAnimations = () => {
            // prettier-ignore
            // As with desktop animations we still need to make certian elements visible
            (downloadCV as HTMLElement).style.opacity = '100%'
            navLinks.forEach(navLink => ((navLink as HTMLElement).style.opacity = '100%'))

            landingAnimations()

            // @ts-ignore
            homeLink.animate(homeLinkKeyFrames, {
                ...homeLinkOptions,
                delay: landingAnimationsDuration,
            })

            // @ts-ignore
            hamburger.animate(homeLinkKeyFrames, {
                ...homeLinkOptions,
                delay: landingAnimationsDuration,
            })
        }
    }, [])

    return () => welcomeAnimations()
}

export default useWelcomeAnimations
