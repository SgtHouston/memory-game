// Step 1 Import React from react
import React from 'react'
import logo from "./logo-wrench.png"

// Step 2 Code for Component
class MemoryCard extends React.Component{

    render() {
        
        let innerClass = "MemoryCard__inner";

        if (this.props.isFlipped) {
            innerClass = "MemoryCard__inner flipped"
        }
        
        return (
            <div className="MemoryCard" onClick={this.props.clickHandler}>
                <div className={innerClass}>
                    <div className="MemoryCard__back">
                        <img className="logo" src={logo} alt=""></img>
                    </div>
                    <div classname="MemoryCard__front">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        )
    }
}



// Step 3 Export component for use in app.js
export default MemoryCard
