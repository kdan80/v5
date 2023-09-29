const easing = 'cubic-bezier(0.42, 0, 0.58, 1)'
const duration = 250
const delay = 100
const fill = 'forwards'

const navLinkKeyFrames = [
    {
        transform: 'translateY(-100%)',
        opacity: 0,
    },
    {
        transform: 'translateY(0)',
        opacity: 1,
    },
]

const navLinkOptions = {
    duration: duration,
    fill: fill,
    easing: easing,
    delay: delay,
}

const homeLinkKeyFrames = [
    {
        opacity: 0,
    },
    {
        opacity: 1,
    },
]

const homeLinkOptions = {
    duration: duration,
    fill: fill,
    easing: 'ease-in-out',
    delay: delay,
}

const landingKeyFrames = [
    {
        transform: 'translateY(20px)',
        opacity: 0,
    },
    {
        transform: 'translateY(0)',
        opacity: 1,
    },
]

const socialLinkKeyFrames = [
    {
        opacity: 0,
    },
    {
        opacity: 1,
    },
]

const socialLinkOptions = {
    ...navLinkOptions,
}

const landingOptions = {
    duration: duration,
    fill: fill,
    easing: easing,
    delay: delay,
}

export {
    navLinkKeyFrames,
    navLinkOptions,
    homeLinkKeyFrames,
    homeLinkOptions,
    landingKeyFrames,
    landingOptions,
    socialLinkKeyFrames,
    socialLinkOptions,
}
