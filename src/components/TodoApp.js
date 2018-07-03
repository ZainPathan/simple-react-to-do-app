import React from 'react'
import axios from 'axios';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends React.Component {
    constructor(props) {
        //Pass the props to the parent class
        super(props);
        //Set Initial State
        this.state ={
            data: []
        };
        this.apiURL = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
    }

    //Lifecycle method
    componentDidMount() {
        //Make HTTP request with Axios
        axios.get(this.apiURL)
            .then( (res) => {
                //Set state with result
                this.setState( {data: res.data} );
            });

        /* Sample data response
        [
            {
                "id": "1",
                "text": "first one"
            },
            {
                "id": "2",
                "text": "another todo"
            },
            {
                "id": "3",
                "text": "omg another one"
            }
            ]
        */
    }

    //Add Todo handler
    addTodo(val) {
        //Assemble data
        const todo = {
            text: val
        };
        //Update data
        axios.post(this.apiURL, todo)
            .then( (res) => {
                this.state.data.push(res.data);
                this.setState({
                    data: this.state.data
                });
            });
    }

    //Handle remove
    handleRemove(id) {
        //Filter all todos except the one to be removed
        const remainingTodos = this.state.data.filter( (todo) => {
            if( todo.id !== id ) {
                return true;
            }
        });
        console.log('Remanining Todos after filter : ', remainingTodos);
        //Update state with filtered todos
        axios.delete(this.apiURL+'/'+id)
            .then( (res) => {
                this.setState({
                    data: remainingTodos
                });
            });
    }

    render() {
        var customPropsObj = {
            name: 'Zain',
            age: 28
        },
        customPropsArr = [1, 2, 3];

        //Render JSX and child components
        return (
            <div>
                <Title 
                    todoCount={this.state.data.length } 
                    customPropsObj={customPropsObj}
                    customPropsArr={customPropsArr}
                />
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}

export default TodoApp;