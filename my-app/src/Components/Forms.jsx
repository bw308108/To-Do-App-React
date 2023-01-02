import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(){
        super();
        this.state = {
            add_string : ""
        }
    }
    
    inputHandler = (event) => {
        
        this.setState(() => {
            return (
                {
                    add_string : event.target.value //orignal was add_string
                }
            )
        })
    }

    submithandler = (event) => {
        event.preventDefault();
        this.props.addList(this.state.add_string)
        document.getElementById('addtoinput').value ="";
    }

        
    render() {
        // console.log(this.props.newList)
    return (
    <div>
        <form onSubmit={(event)=> this.submithandler(event)} >
        <input id='addtoinput' className='newReminder' onChange={this.inputHandler}
        type="text"   
        placeholder='Enter New Reminder'/>
        <button className='todoButton' type='submit'> + </button>
        </form>
    </div>
    )
    } 
}