// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// COMPONENTS
import History from './History.js'

// TESTS
afterEach(cleanup)

test('<History />', () => {
    const { debug, getByTestId } = render(<History />)

    const history = getByTestId('History') 

    // initial history value is ''
    expect(history.textContent).toBe('')
})