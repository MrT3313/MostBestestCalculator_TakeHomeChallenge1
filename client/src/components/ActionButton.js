// IMPORTS
import React from 'react'

// STYLES
import '../styles/button.css'

// __MAIN__
function ActionButton({type}) {
    switch (type) {
        case 'divide':
            return (
                <button className='Button'>
                    &divide;
                </button> 
            )
        case 'clear': 
            return (
                <button className='Button clear'>
                    C
                </button> 
            )
        case 'multiply':
            return (
                <button className='Button'>
                    &#215;
                </button> 
            )
        case 'subtract':
            return (
                <button className='Button'>
                    &#8722;
                </button> 
            )
        case 'add':
            return (
                <button className='Button'>
                    &#43;
                </button>
            )
        case 'equals': 
            return (
                <button className='Button equals'>
                	&#61;
                </button> 
            )
        default:
            return null
    }
}

// EXPORT
export default ActionButton