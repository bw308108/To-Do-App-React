import React, { Component } from 'react'

export default class List extends Component {
  render() {


    const { todolist } = this.props;
    const { removeItem } = this.props;

    

    return (
      <div className='itemList'>
      {
        todolist.map((_todo,_index) => {
            return(
                <div key={_index}>{_todo}
                <button className='Delete' key={_index} onClick={() => removeItem(_index)} type='submit'>
              Delete
              </button>
              </div>
            )         
        })
      }
      </div>
    ) 
  }
}
