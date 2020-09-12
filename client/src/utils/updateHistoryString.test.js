// IMPORTS
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

// COMPONENTS
// import ResultScreen from '../Calculator/ResultScreen.js'
// import History from '../Calculator/History.js'

// import Calculator from '../Calculator/index.js'
import Button from '../Calculator/Button.js'

// FUNCTIONS
import { updateHistoryString } from './updateHistoryString.js'

// TESTS
afterEach(cleanup)

// MOCK FUNCTIONS
global.alert = jest.fn();

test('UTILS > updateHistory', () => {
    expect(updateHistoryString(0,'1/',false)).toBe('1')
    expect(global.alert).toHaveBeenCalled()
    
    expect(updateHistoryString('/','1/',false)).toBe(false)
    expect(updateHistoryString('*','1/',false)).toBe(false)
    expect(updateHistoryString('+','1/',false)).toBe(false)
    expect(updateHistoryString('-','1/',false)).toBe(false)

    expect(updateHistoryString(1,'',false)).toBe('1')
    expect(updateHistoryString(2,'1',false)).toBe('12')
    expect(updateHistoryString(2,'1+',false)).toBe('1+2')
    
    expect(updateHistoryString(2,'','2')).toBe(false)
    expect(updateHistoryString('+','','2')).toBe("2+")

})