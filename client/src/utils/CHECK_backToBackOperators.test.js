// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// FUNCTIONS
import { CHECK_backToBackOperators } from './CHECK_backToBackOperators.js'

// TESTS
afterEach(cleanup)

const operations = ['*','-','/','+']

test('UTILS > CHECK_firstEntry: FAIL => Back-to-Back Operations', () => {
    expect(CHECK_backToBackOperators('/', '2+', operations)).toBe(true)
    expect(CHECK_backToBackOperators('*', '2/', operations)).toBe(true)
    expect(CHECK_backToBackOperators('+', '2-', operations)).toBe(true)
    expect(CHECK_backToBackOperators('-', '2+', operations)).toBe(true)
})
test('UTILS > CHECK_firstEntry: PASS', () => {
    expect(CHECK_backToBackOperators('2', '2+', operations)).toBe(false)
})