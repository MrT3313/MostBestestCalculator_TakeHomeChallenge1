// IMPORTS
import React from 'react'

// STYLES

// __MAIN__
function Button({num, onClick}) {
    const className = num === 0  ? 'NumButton zero' : 'NumButton'
    return (
        <button 
            className={className}
            data-testid={className}
            onClick={() => onClick(num)}
        >
            {num}
        </button>
    )
}

// EXPORT
export default Button