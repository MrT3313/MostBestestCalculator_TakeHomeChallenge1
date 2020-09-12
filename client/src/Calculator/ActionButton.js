// IMPORTS
import React from 'react'

// STYLES
import '../styles/button.css'

// __MAIN__
function ActionButton({operation, onClick}) {
    // operation prop: [altImgText, symbol, svg]
    return (
        <button 
            className={ operation[1] === 'C' ? 'ActionButton clear' : 
                        operation[1] === '=' ? 'ActionButton equals' :
                            'ActionButton'
            }
            onClick={() => onClick(operation[1])}
        >
            {operation.length === 3 ? 
                <img 
                    src={operation[2]} alt={operation[0]}
                    height='15px' fill='white'
                /> : operation[1]
            }
        </button> 
    )
}

// EXPORT
export default ActionButton