// IMPORTS
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

// COMPONENTS
import Calculator from './index.js'

// GLOBAL MOCK
global.alert = jest.fn();

// TESTS
afterEach(cleanup)


test('Functionality: Number Butttons', () => {
    const { debug, getByTestId } = render(<Calculator />)

    const History = getByTestId('History')
    const ResultOutput = getByTestId('ResultOutput')
    
    const btn_0 = getByTestId('NumButton_0')
    const btn_1 = getByTestId('NumButton_1')
    const btn_2 = getByTestId('NumButton_2')
    const btn_3 = getByTestId('NumButton_3')
    const btn_4 = getByTestId('NumButton_4')
    const btn_5 = getByTestId('NumButton_5')
    const btn_6 = getByTestId('NumButton_6')
    const btn_7 = getByTestId('NumButton_7')
    const btn_8 = getByTestId('NumButton_8')
    const btn_9 = getByTestId('NumButton_9')

    const clear = getByTestId('ActionButton_C')
    const plus = getByTestId('ActionButton_+')
    const minus = getByTestId('ActionButton_-')
    const divide = getByTestId('ActionButton_/')
    const multiply = getByTestId('ActionButton_*')
    const equals = getByTestId('ActionButton_=')

    // 1 + 9
    fireEvent.click(btn_1)
    fireEvent.click(plus)
    fireEvent.click(btn_9)
    expect(History.textContent).toBe('1+9')
    fireEvent.click(equals)
    expect(History.textContent).toBe('')
    expect(ResultOutput.textContent).toBe('10')
    
    // Extend Result => ^ * 2
    fireEvent.click(multiply)
    fireEvent.click(btn_2)
    expect(History.textContent).toBe('10*2')
    fireEvent.click(equals)
    expect(History.textContent).toBe('')
    expect(ResultOutput.textContent).toBe('20')

    // Extend Result => ^ / 4
    fireEvent.click(divide)
    fireEvent.click(btn_4)
    expect(History.textContent).toBe('20/4')
    fireEvent.click(equals)
    expect(History.textContent).toBe('')
    expect(ResultOutput.textContent).toBe('5')

    // Extend Result => ^ + 7 + 3
    fireEvent.click(plus)
    fireEvent.click(btn_7)
    fireEvent.click(plus)
    fireEvent.click(btn_3)
    expect(History.textContent).toBe('5+7+3')
    fireEvent.click(equals)
    expect(History.textContent).toBe('')
    expect(ResultOutput.textContent).toBe('15')

    // Clear
    fireEvent.click(clear)
    expect(History.textContent).toBe('')
    expect(ResultOutput.textContent).toBe('0')

    // 8 - 6
    fireEvent.click(btn_8)
    fireEvent.click(minus)
    fireEvent.click(btn_6)
    expect(History.textContent).toBe('8-6')
    fireEvent.click(equals)
    expect(History.textContent).toBe('')
    expect(ResultOutput.textContent).toBe('2')

    // Extend Result => ^ * 5
    fireEvent.click(multiply)
    fireEvent.click(btn_5)
    expect(History.textContent).toBe('2*5')
    fireEvent.click(equals)
    expect(History.textContent).toBe('')
    expect(ResultOutput.textContent).toBe('10')

    // Extend Result => ^ / 0
    fireEvent.click(divide)
    fireEvent.click(btn_0)
    expect(History.textContent).toBe('10')
    expect(global.alert).toHaveBeenCalled()
})