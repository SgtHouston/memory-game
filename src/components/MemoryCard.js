// Step 1 Import React from react
import React from 'react'
import logo from "./logo-wrench.png"

// Step 2 Code for Component
class MemoryCard extends React.Component{
    constructor () {
        super()
        this.state = {
            isFlipped: false
        }
    }

    clickHandler = () => {
        this.setState ({
            isFlipped: (!this.state.isFlipped)
        })
    }


    render() {
        
        let innerClass = "MemoryCard__inner";

        if (this.state.isFlipped) {
            innerClass = "MemoryCard__inner flipped"
        }
        
        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={innerClass}>
                    <div className="MemoryCard__back">
                        <img className="logo" src={logo} alt=""></img>
                    </div>
                    <div classname="MemoryCard__front">
                        ∆
                    </div>
                </div>
            </div>
        )
    }
}



// Export component for use in app.js
export default MemoryCard
