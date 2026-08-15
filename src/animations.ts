const easing = 'cubic-bezier(0.42, 0, 0.58, 1)'
const duration = 250
const delay = 100
const fill: FillMode = 'forwards'

const navLinkKeyFrames: Keyframe[] = [
    {
        transform: 'translateY(-100%)',
        opacity: 0,
    },
    {
        transform: 'translateY(0)',
        opacity: 1,
    },
]

const navLinkOptions: KeyframeAnimationOptions = {
    duration,
    fill,
    easing,
    delay,
}

const homeLinkKeyFrames: Keyframe[] = [
    {
        opacity: 0,
    },
    {
        opacity: 1,
    },
]

const homeLinkOptions: KeyframeAnimationOptions = {
    duration,
    fill,
    easing: 'ease-in-out',
    delay,
}

const landingKeyFrames: Keyframe[] = [
    {
        transform: 'translateY(20px)',
        opacity: 0,
    },
    {
        transform: 'translateY(0)',
        opacity: 1,
    },
]

const socialLinkKeyFrames: Keyframe[] = [
    {
        opacity: 0,
    },
    {
        opacity: 1,
    },
]

const socialLinkOptions: KeyframeAnimationOptions = {
    ...navLinkOptions,
}

const landingOptions: KeyframeAnimationOptions = {
    duration,
    fill,
    easing,
    delay,
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
