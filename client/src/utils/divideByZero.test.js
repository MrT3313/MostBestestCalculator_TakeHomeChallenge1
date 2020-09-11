// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// COMPONENTS
import { divideByZero } from './divideByZero.js'

// TESTS
afterEach(cleanup)

test('UTILS > divideByZero', () => {
    expect(divideByZero('1+', 0)).toBe(true)
    expect(divideByZero('1*', 0)).toBe(true)
    expect(divideByZero('1-', 0)).toBe(true)
    expect(divideByZero('1/', 0)).toBe(false)
})