import * as React from 'react';
import { ITodo } from '../model/ToDo';

type Props = {
    todo: ITodo;
};

const Todo: React.FC<Props> = ({ todo }) => {
    const { title, description } = todo;

    return (
        <div className="Card">
            <h1>{title}</h1>
            <span>{description}</span>
        </div>
    );
};

export default Todo;
