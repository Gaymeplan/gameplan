import React from 'react';
import AddTodo from './components/AddTodo';
import { useUserQuery } from './graphql/User/UserRequest';
import { GET_USERS } from './graphql/User/UserGraphQL';
import { IUser } from './model/User';

const App = () => {
    const { loading, error, data } = useUserQuery(GET_USERS);

    if (loading) return <h1>loading...</h1>;
    if (error) {
        console.error(error);
        return <h1>Something went wrong!</h1>;
    }

    return (
        <div className="App">
            <h1>My Todos</h1>
            <AddTodo />
            {data?.getUsers?.map((user: IUser) => (
                <span key={user.id}>
                    {user.firstName} {user.lastName}
                </span>
            ))}
        </div>
    );
    // const { loading, error, data } = useTodoQuery(GET_TODOS);

    // if (loading) return <h1>Loading...</h1?>;
    // if (error) return <h1>Something went wrong!</h1>;

    // return (
    //     <div className="App">
    //         <h1>My Todos</h1>
    //         <AddTodo />
    //         {data?.getTodos?.map((todo: ITodo) => (
    //             <Todo key={todo.id} todo={todo} />
    //         ))}
    //     </div>
    // );
};

export default App;
