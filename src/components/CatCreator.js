// import { useState } from 'react';
import React from 'react';

class CatCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        }
    }

    render() {
        return (
            <form 
                onSubmit={ (event) => {
                    event.preventDefault();
                    this.props.addCat(this.state.inputValue);               
                }} 
            >
                <input 
                    type="text" 
                    value={this.state.inputValue}
                    onChange={ (event) => {
                        // updateInputValue(event.target.value)
                        // Change state
                        this.setState( {
                            inputValue: event.target.value
                        })
                    }}
                
                />
                <button type="submit">Add a Cat!</button>
            </form>
        )
    }
}


// function CatCreator(props) {
//     const [inputValue, updateInputValue] = useState("");

//     return (
//         <form 
//             onSubmit={ (event) => {
//                 event.preventDefault();
//                 props.addCat(inputValue);               
//             }} 
//         >
//             <input 
//                 type="text" 
//                 value={inputValue}
//                 onChange={ (event) => {
//                     updateInputValue(event.target.value)
//                 }}
            
//             />
//             <button type="submit">Add a Cat!</button>
//         </form>
//     )

// }


export { CatCreator };