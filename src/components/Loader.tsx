import React from 'react'
import { Logo } from '@/icons'

interface Props {
    finishLoading: () => void
}

const Loader = ({ finishLoading }: Props) => {
    const ref = React.useRef<HTMLSpanElement | null>(null)
    React.useEffect(() => {
        if (!ref.current) return
        const skipText = ref.current

        skipText.animate([{ opacity: '0' }, { opacity: '1' }], {
            duration: 300,
            delay: 2000,
            easing: 'ease-in-out',
            fill: 'forwards',
        })
    })

    return (
        <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center'>
            <span
                ref={ref}
                className='opacity-0 text-medium-700 absolute bottom-[3rem] text-sm md:text-base md:right-[3rem] 
                after:content-["Tap_screen_to_skip_intro"]
                md:after:content-["Press_any_key_to_skip_intro"]
                '
            />
            <Logo finishLoading={finishLoading} />
        </div>
    )
}

export default Loader
