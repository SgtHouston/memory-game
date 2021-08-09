// Step 1 Import React from react
import React from 'react'
import logo from "./logo-wrench.png"

// Step 2 Code for Component
class MemoryCard extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }


    render() {
        return (
            <div className="MemoryCard">
                <img className="logo" src={logo} alt=""></img>
            </div>
        )
    }
}



// Export component for use in app.js
export default MemoryCard
