import React from 'react';
import { GET_TODOS } from './graphql/Todo/ToDoGraphQL';
import { useTodoQuery } from './graphql/Todo/useRequest';
import AddTodo from './components/AddTodo';
import Todo from './components/ToDo';
import { ITodo } from './model/ToDo';

const App = () => {
    const { loading, error, data } = useTodoQuery(GET_TODOS);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;

    return (
        <div className="App">
            <h1>My Todos</h1>
            <AddTodo />
            {data?.getTodos?.map((todo: ITodo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default App;
