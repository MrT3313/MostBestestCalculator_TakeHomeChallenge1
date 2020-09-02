// IMPORTS
import React from 'react'

// STYLES
import '../styles/button.css'

// __MAIN__
function ActionButton({type, click}) {
    switch (type) {
        case 'divide':
            return (
                <button 
                    className='Button'
                    onClick={() => click('/')}
                >
                    &divide;
                </button> 
            )
        case 'clear': 
            return (
                <button 
                    className='Button clear'
                    onClick={() => click()}
                >
                    C
                </button> 
            )
        case 'multiply':
            return (
                <button 
                    className='Button'
                    onClick={() => click('*')}
                >
                    &#215;
                </button> 
            )
        case 'subtract':
            return (
                <button 
                    className='Button'
                    onClick={() => click('-')}
                >
                    &#8722;
                </button> 
            )
        case 'add':
            return (
                <button 
                    className='Button'
                    onClick={() => click('+')}
                >
                    &#43;
                </button>
            )
        case 'equals': 
            return (
                <button 
                    className='Button equals'
                    onClick={() => click('=')}
                >
                	&#61;
                </button> 
            )
        default:
            return null
    }
}

// EXPORT
export default ActionButton