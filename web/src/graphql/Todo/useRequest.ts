import { DocumentNode, useQuery, useMutation } from '@apollo/react-hooks';
import { ITodos, ITodoMutation } from '../../model/ToDo';

export function useTodoQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<ITodos>(gqlQuery);
    return { loading, error, data };
}

export function useTodoMutation(gqlQuery: DocumentNode) {
    const [addTodo] = useMutation<ITodoMutation>(gqlQuery);
    return [addTodo];
}
