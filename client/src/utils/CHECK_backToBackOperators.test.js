// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// FUNCTIONS
import { CHECK_backToBackOperators } from './CHECK_backToBackOperators.js'

// TESTS
afterEach(cleanup)

const operations = ['*','-','/','+']

test('UTILS > CHECK_backToBackOperators => true', () => {
    expect(CHECK_backToBackOperators('/', '2+', operations)).toBe(true)
    expect(CHECK_backToBackOperators('*', '2/', operations)).toBe(true)
    expect(CHECK_backToBackOperators('+', '2-', operations)).toBe(true)
    expect(CHECK_backToBackOperators('-', '2+', operations)).toBe(true)
})
test('UTILS > CHECK_backToBackOperators => => false', () => {
    expect(CHECK_backToBackOperators('2', '2+', operations)).toBe(false)
    expect(CHECK_backToBackOperators('4', '2/', operations)).toBe(false)
})