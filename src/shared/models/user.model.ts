export interface IUser {
    email: string;
    name: string;
    id: string;
    password: string;
    createdAt: Date;
    updatedAt?: Date;
}
