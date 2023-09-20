interface Props {
    index: number
    overline?: boolean
    children: React.ReactNode
}

const NumberedHeading = ({ overline, index, children }: Props) => {
    return (
        <div className='flex gap-2 md:gap-5'>
            <h2 className={`flex w-full gap-2  whitespace-nowrap text-light-200 md:gap-[0.8rem]`}>
                <div className='flex items-baseline gap-2 md:gap-[0.8rem]'>
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
                </div>
                <div
                    // prettier-ignore
                    className={
                        `h-full flex-1 md:w-full lg:w-[300px] flex items-center 
                        ${overline && 'hidden'}`}
                >
                    <span className='h-px w-full ml-[10px] bg-green md:max-w-[300px]' />
                </div>
            </h2>
        </div>
    )
}

export default NumberedHeading
