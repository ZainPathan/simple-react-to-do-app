import React from 'react'
import Todo from './Todo';

const TodoList = ( {todos, remove} ) => {
    //modify the props - todos
    // todos.push({
    //     id: +new Date,
    //     text: 'Added todo in props'
    // });
    //Map through the todos
    const todoNode = todos.map( (todo) => {
        return ( <Todo todo={todo} key={todo.id} remove={remove} />);
    });
    return (
        <div className="list-group" style={{ marginTop: '30px'}}>
            {todoNode}
        </div>
    );
}

export default TodoList;