const bigButton = `text-green cursor-pointer border border-green rounded text-sm font-mono transition-all duration-300 ease-in-out hover:bg-heroHover focus:bg-heroHover active:bg-heroHover`

const section = `flex justify-center items-center min-h-screen px-6 w-screen border`

const sectionContent = `flex flex-col gap-6 font-sans lg:max-w-[58rem]`

const icon = `h-5 w-5 cursor-pointer fill-light-300 md:fill-light-200 hover:fill-green hover:translate-y-[-2px] transition duration-350 ease-in-out`

const paragraph = `text-light-900`

// To calculate the top offset value use this formula;
// ------------ (50% - (0.5 x height)) ------------
// eg if the div is 2px high then the calculation is 50%-1px
const hamburgerBar = `absolute top-[calc(50%-1px)] h-[2px] rounded-[2px] bg-green transition ease-in-out duration-[250ms]`

export { bigButton, hamburgerBar, icon, paragraph, section, sectionContent }
