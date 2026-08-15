interface Props {
    index: number
    overline?: boolean
    children: React.ReactNode
    className?: string
}

const NumberedHeading = ({ overline, index, children, className }: Props) => {
    return (
        <div className={`${className} flex gap-2 md:gap-5`}>
            <h2 className='flex items-baseline gap-2 whitespace-nowrap text-light-200 md:gap-[0.8rem]'>
                <span
                    // prettier-ignore
                    className={`text-green font-mono text-[1.1rem] font-normal 
                        ${overline && 'text-base'}`}
                >
                    {index < 10 ? `0${index}.` : `${index}.`}
                </span>
                <span
                    // prettier-ignore
                    className={`text-2xl md:text-[1.8rem] font-semibold 
                        ${overline && 'text-lg md:text-lg font-normal md:font-normal text-green font-mono'}`}
                >
                    {children}
                </span>
            </h2>
            {!overline && (
                <span
                    aria-hidden='true'
                    className='h-full flex-1 self-center'
                >
                    <span className='block h-px w-full ml-[10px] bg-green md:max-w-[300px]' />
                </span>
            )}
        </div>
    )
}

export default NumberedHeading
