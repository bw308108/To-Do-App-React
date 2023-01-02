import { Component } from 'react';
import './App.css';
import Forms from './Components/Forms';
import Button from './Components/Button';
import List from './Components/List';
import Header from './Components/Header';


class App extends Component {
  constructor(){
    super()
    this.state = {
      todoList : []

    }
  }


  addtoList = (todos) => this.setState({ todoList: [...this.state.todoList, todos] }) 

//    deleteItem(todos){

//    const updatedList = this.state.todoList.filter(_todos => todos);
    
//    this.setState({todoList: updatedList})

//  }

  removeItem = (index) => {
    const { todoList } = this.state
    const newtodoList = todoList.filter((todo, i) => i!== index)
    this.setState({ todoList: newtodoList})
    
  }
  render() {
  return (
    <div className="App">
    <Header/>
     <p>My To Do List</p>
    <Forms addList={this.addtoList}/>
    <List todolist={this.state.todoList} removeItem={this.removeItem}/>
    </div>
  );
}
}
export default App;
