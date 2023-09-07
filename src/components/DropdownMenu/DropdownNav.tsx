import React, { SetStateAction } from 'react'
import NavLink from '../Header/NavLinks'
import { siteConfig } from '@/config'

interface Props {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const DropdownNav = ({ isOpen, setIsOpen }: Props) => {
    const ref = React.useRef<HTMLElement>(null)
    const [transitionFinished, setTranstionFinished] = React.useState(false)

    // This side effect keeps track of when the nav has full transitioned so that other elements can then be animated
    React.useEffect(() => {
        if (!ref.current) return
        const nav = ref.current

        nav.addEventListener('transitionend', () => setTranstionFinished(prev => !prev))
        console.log(nav)
        return () => {
            nav?.removeEventListener('transitionend', () => setTranstionFinished(prev => !prev))
        }
    }, [])

    return (
        <nav
            ref={ref}
            // prettier-ignore
            className={
                `flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#303234aa] backdrop-blur-md transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-y-0' : '-translate-y-full'}`
            }
        >
            {isOpen && transitionFinished && (
                <nav className='text-light-300 md:text-light-200 font-mono flex flex-col gap-16'>
                    {siteConfig.navLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={link.url}
                            onClick={() => setIsOpen(false)}
                            // prettier-ignore
                            className={`
                                ${link.id === 1 && 'animate-bounceInFromLeft1'} 
                                ${link.id === 2 && 'animate-bounceInFromLeft2'} 
                                ${link.id === 3 && 'animate-bounceInFromLeft3'}
                            `}
                        >
                            <span className='text-green align-baseline'>0{index + 1}.&nbsp;</span>
                            <span className='text-xl hover:text-green transition-colors ease-in-out duration-500'>
                                {link.name}
                            </span>
                        </a>
                    ))}
                </nav>
            )}
        </nav>
    )
}

export default DropdownNav

// className={`${
//     link.id === 1
//         ? 'animate-bounceInFromLeft1'
//         : index === 2
//         ? 'animate-bounceInFromLeft2'
//         : 'animate-bounceInFromLeft3'
// }`}

// <a
//                             href={link.url}
//                             onClick={() => setIsOpen(false)}
//                             className={`${
//                                 link.id === 1
//                                     ? 'animate-bounceInFromLeft1'
//                                     : index === 2
//                                     ? 'animate-bounceInFromLeft2'
//                                     : 'animate-bounceInFromLeft3'
//                             }`}
//                         >
//                             <span className='text-green align-baseline'>0{index + 1}.&nbsp;</span>
//                             <span className='text-xl hover:text-green transition-colors ease-in-out duration-500'>
//                                 {link.name}
//                             </span>
//                         </a>
