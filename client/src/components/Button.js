// IMPORTS
import React from 'react'

// STYLES

// __MAIN__
function Button({num, click}) {
    switch(num) {
        case 0:
            return (
                <button 
                    className='Button zero'
                    onClick={() => click(num)}
                >
                    {num}
                </button>
            )
            default: 
                return (
                    <button 
                        className='Button'
                        onClick={() => click(num)}
                    >
                        {num}
                    </button>
                )
    }
}

// EXPORT
export default Button