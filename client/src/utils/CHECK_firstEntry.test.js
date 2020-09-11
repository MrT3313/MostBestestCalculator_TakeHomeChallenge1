// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// COMPONENTS
import { CHECK_firstEntry } from './CHECK_firstEntry.js'

// TESTS
afterEach(cleanup)

const operations = ['*','-','/','+']

test('UTILS > CHECK_firstEntry: FAIL => Operation as first entry', () => {
    expect(CHECK_firstEntry('/','', false, operations)).toBe(false)
    expect(CHECK_firstEntry('*','', false, operations)).toBe(false)
    expect(CHECK_firstEntry('+','', false, operations)).toBe(false)
    expect(CHECK_firstEntry('-','', false, operations)).toBe(false)
})

test('UTILS > CHECK_firstEntry: FAIL => Active History', () => {
    expect(CHECK_firstEntry('1','2', false, operations)).toBe(false)
    expect(CHECK_firstEntry('1','2+', false, operations)).toBe(false)
})

test('UTILS > CHECK_firstEntry: FAIL => Active Result', () => {
    expect(CHECK_firstEntry('2','', '1', operations)).toBe(false)
    expect(CHECK_firstEntry('2','', '1', operations)).toBe(false)
})
test('UTILS > CHECK_firstEntry: PASS', () => {
    expect(CHECK_firstEntry('1','', false, operations)).toBe(true)
    expect(CHECK_firstEntry('2','', false, operations)).toBe(true)
    expect(CHECK_firstEntry('3','', false, operations)).toBe(true)
    expect(CHECK_firstEntry('4','', false, operations)).toBe(true)
})