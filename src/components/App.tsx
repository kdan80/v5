'use client'

import React from 'react'

const Fragment = React.Fragment

interface Props {
    children: React.ReactNode
}

const App = ({ children }: Props) => {
    return <Fragment>{children}</Fragment>
}

export default App
