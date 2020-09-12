// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// COMPONENTS
import ResultScreen from './ResultScreen.js'

// TESTS
afterEach(cleanup)

test('<ResultScreen />', () => {
    // - 1 - // Descructure Render()
    const { debug, getByTestId } = render(<ResultScreen />)
    // debug()
    
    // - 2 - // Save SubComponent
    const resultOutput = getByTestId('ResultOutput')

    // - 3 - // Tests
    // initial value is '0'
    expect(resultOutput.textContent).toBe('0')

})