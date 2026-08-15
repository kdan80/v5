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
    return React.useCallback(() => {
        if (loading) return

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        const homeLink = document.querySelector('#homeLink')
        if (!homeLink) return
        const hamburger = document.querySelector('#hamburger')
        const navLinks = Array.from(document.querySelectorAll('.navLink'))
        const downloadCV = document.querySelector('#downloadCV')
        const socialLinks = document.querySelectorAll('.socialLink')
        const landingElements: Array<HTMLElement> = Array.from(
            document.querySelectorAll('.landing')
        )

        const revealElement = (element: Element | null) => {
            if (element instanceof HTMLElement || element instanceof SVGElement) {
                element.style.opacity = '100%'
            }
        }

        if (prefersReducedMotion) {
            ;[homeLink, hamburger, downloadCV, ...navLinks, ...socialLinks, ...landingElements].forEach(
                revealElement
            )
            return
        }

        const landingAnimationsDuration =
            (landingOptions.duration as number) + (landingElements.length - 1) * 100

        const landingDelay = landingOptions.delay as number
        const navLinkDelay = navLinkOptions.delay as number
        const socialLinkDelay = socialLinkOptions.delay as number
        const navLinksAnimationDuration = (navLinkOptions.duration as number) + (navLinks.length - 1) * 100

        const landingAnimations = () => {
            landingElements.forEach((element, index) => {
                element.animate(landingKeyFrames, {
                    ...landingOptions,
                    delay: index * landingDelay,
                })
            })
        }

        // Desktop animations
        if (window.innerWidth >= 768) {
            // prettier-ignore
            // We don't need to animate the hamburger but we still need to make it visible
            ;(hamburger as HTMLElement).style.opacity = '100%'

            landingAnimations()

            navLinks.forEach((navLink, index) => {
                navLink.animate(navLinkKeyFrames, {
                    ...navLinkOptions,
                    delay: landingAnimationsDuration + index * navLinkDelay,
                })
            })

            homeLink.animate(homeLinkKeyFrames, {
                ...homeLinkOptions,
                delay:
                    landingDelay +
                    landingAnimationsDuration +
                    navLinksAnimationDuration,
            })

            socialLinks.forEach((link, index) => {
                link.animate(socialLinkKeyFrames, {
                    ...socialLinkOptions,
                    delay:
                        landingDelay +
                        landingAnimationsDuration +
                        navLinksAnimationDuration +
                        index * socialLinkDelay,
                })
            })
            return
        }

        // Mobile animations
        // prettier-ignore
        // As with desktop animations we still need to make certian elements visible
        ;(downloadCV as HTMLElement).style.opacity = '100%'
        navLinks.forEach(navLink => ((navLink as HTMLElement).style.opacity = '100%'))

        landingAnimations()

        homeLink.animate(homeLinkKeyFrames, {
            ...homeLinkOptions,
            delay: landingAnimationsDuration,
        })

        hamburger?.animate(homeLinkKeyFrames, {
            ...homeLinkOptions,
            delay: landingAnimationsDuration,
        })

        socialLinks.forEach((link, index) => {
            link.animate(socialLinkKeyFrames, {
                ...socialLinkOptions,
                delay: landingAnimationsDuration + 300 + index * socialLinkDelay,
            })
        })
    }, [loading])
}

export default useWelcomeAnimations
