// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// FUNCTIONS
import { CHECK_divideByZero } from './CHECK_divideByZero.js'

// TESTS
afterEach(cleanup)

test('UTILS > divideByZero => false', () => {
    expect(CHECK_divideByZero('1+', 0)).toBe(false)
    expect(CHECK_divideByZero('1*', 0)).toBe(false)
    expect(CHECK_divideByZero('1-', 0)).toBe(false)
})
test('UTILS > divideByZero => true', () => {
    expect(CHECK_divideByZero('1/', 0)).toBe(true)
    expect(CHECK_divideByZero('13/', 0)).toBe(true)
})