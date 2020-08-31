// // IMPORTS
// import React from 'react'
// import { render } from '@testing-library/react'

// // COMPONENTS
// import { App } from './app.js'

// if('Renders without crashing', () => {

// })

// -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- //

// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// COMPONENTS
import App from './App'

// __MAIN__
// - 1 - // Cleanup
afterEach(cleanup)

// - 2 - // Tests
it('renders without crashing', () => {
  render(<App />)
})
test('check for Hello World text', () => {
    const wrapper = render(<App />)
    // console.log(wrapper.debug())

    const element = wrapper.queryByText(/Hello World/i)
    expect(element).toBeTruthy()
})