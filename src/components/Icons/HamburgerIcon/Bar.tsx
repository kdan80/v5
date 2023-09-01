interface Props {
    position: string
    className?: string
}

const Bar = ({ position, className }: Props) => {
    const offset =
        position === 'top' ? 'translate-y-[-9px]' : position === 'bottom' ? 'translate-y-[9px]' : ''

    return (
        <div
            className={`absolute h-[2px] w-full top-[calc(50%-1px)] origin-center rounded-[2px] bg-green transition ease-in-out duration-[250ms] ${offset} ${className}`}
        ></div>
    )
}

export default Bar
