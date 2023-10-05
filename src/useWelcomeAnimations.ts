import React from 'react'
import {
    landingKeyFrames,
    landingOptions,
    navLinkKeyFrames,
    navLinkOptions,
    homeLinkKeyFrames,
    homeLinkOptions,
    socialLinkKeyFrames,
    socialLinkOptions,
} from './animations'

const useWelcomeAnimations = (loading: boolean) => {
    let welcomeAnimations: () => void

    React.useEffect(() => {
        if (loading) return

        const homeLink = document.querySelector('#homeLink')
        if (!homeLink) return
        const hamburger = document.querySelector('#hamburger')
        const navLinks = Array.from(document.querySelectorAll('.navLink'))
        const downloadCV = document.querySelector('#downloadCV')
        const socialLinks = document.querySelectorAll('.socialLink')
        const landingElements: Array<HTMLElement> = Array.from(
            document.querySelectorAll('.landing')
        )

        const landingAnimationsDuration =
            (landingOptions.duration as number) + ((landingElements.length as number) - 1) * 100

        const navLinksAnimationDuration = navLinkOptions.duration + (navLinks.length - 1) * 100

        const landingAnimations = () => {
            landingElements.forEach((element, index) => {
                // @ts-ignore
                element.animate(landingKeyFrames, {
                    ...landingOptions,
                    delay: index * landingOptions.delay,
                })
            })
        }

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

                // @ts-ignore
                homeLink.animate(homeLinkKeyFrames, {
                    ...homeLinkOptions,
                    delay:
                        landingOptions.delay +
                        landingAnimationsDuration +
                        navLinksAnimationDuration,
                })

                socialLinks.forEach((link, index) => {
                    // @ts-ignore
                    link.animate(socialLinkKeyFrames, {
                        ...socialLinkOptions,
                        delay:
                            landingOptions.delay +
                            landingAnimationsDuration +
                            navLinksAnimationDuration +
                            index * socialLinkOptions.delay,
                    })
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

            socialLinks.forEach((link, index) => {
                // @ts-ignore
                link.animate(socialLinkKeyFrames, {
                    ...socialLinkOptions,
                    delay: landingAnimationsDuration + 300 + index * socialLinkOptions.delay,
                })
            })
        }
    }, [loading])

    return () => welcomeAnimations && welcomeAnimations()
}

export default useWelcomeAnimations
