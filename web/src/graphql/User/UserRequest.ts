import { DocumentNode, useQuery } from '@apollo/react-hooks';
import { IUsers } from '../../model/User';

export function useUserQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<IUsers>(gqlQuery);
    return { loading, error, data };
}
