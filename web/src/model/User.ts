export interface IUser {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    age: number;
}

export interface IUsers {
    getUsers: IUser[];
}

export type IUserMutation = {
    addUser: IUser;
};
