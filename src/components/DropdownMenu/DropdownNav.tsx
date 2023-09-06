import React, { SetStateAction } from 'react'
import NavLink from '../Header/NavLinks'
import { siteConfig } from '@/config'

interface Props {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const DropdownNav = ({ isOpen, setIsOpen }: Props) => {
    // This is effect handles page scroll
    // It also automatically closes the dropdown if the page is resized to greater than 768px
    React.useEffect(() => {
        // innerWidth should be >= to the Hamburger.tsx hidden breakpoint
        const onResize = (e: UIEvent) => {
            if (!e.currentTarget) return
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }

        // Disable page scroll when dropdown is open
        isOpen
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [isOpen, setIsOpen])

    return (
        <nav
            // prettier-ignore
            className={
                `flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#303234aa] backdrop-blur-md transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-y-0' : '-translate-y-full'}`
            }
        >
            {isOpen && (
                <nav className='text-light-300 md:text-light-200 font-mono flex flex-col gap-16'>
                    {siteConfig.navLinks.map((link, index) => (
                        <a
                            href={link.url}
                            onClick={() => setIsOpen(false)}
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
