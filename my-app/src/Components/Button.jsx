import React, { Component } from 'react'

export default class Button extends Component {
    handleClick = (event) => {
        return  (
        <input className='newReminder'
        type="text"
        placeholder='Enter New Reminder'>
        </input>)
 }
 
    render() {
    return (
      <div className='newButton' type="Submit" >
      <button onClick={this.handleClick(Event)}>+ Reminder</button>
      </div>
    )
  }

}