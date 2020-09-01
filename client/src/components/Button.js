// IMPORTS
import React from 'react'

// STYLES

// __MAIN__
function Button({num}) {
    switch(num) {
        case 0:
            return (
                <button className='Button zero'>
                    {num}
                </button>
            )
            default: 
                return (
                    <button className='Button'>
                        {num}
                    </button>
                )
    }
}

// EXPORT
export default Button