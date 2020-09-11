// IMPORTS
import React from 'react'
import { render, cleanup } from '@testing-library/react'

// COMPONENTS
import App from './App'

// Tests
afterEach(cleanup)
it('renders without crashing', () => {
  render(<App />)
})