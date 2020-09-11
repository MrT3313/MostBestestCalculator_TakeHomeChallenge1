// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// COMPONENTS
import { CHECK_secondPlusEntry } from './CHECK_secondPlusEntry.js'

// TESTS
afterEach(cleanup)

const operations = ['*','-','/','+']

test('UTILS > CHECK_firstEntry: FAIL => Back-to-Back Operations', () => {
    expect(CHECK_secondPlusEntry('/', '2+', operations)).toBe(false)
    expect(CHECK_secondPlusEntry('*', '2+', operations)).toBe(false)
    expect(CHECK_secondPlusEntry('+', '2+', operations)).toBe(false)
    expect(CHECK_secondPlusEntry('-', '2+', operations)).toBe(false)
})
test('UTILS > CHECK_firstEntry: PASS', () => {
    expect(CHECK_secondPlusEntry('2', '2+', operations)).toBe(true)
})