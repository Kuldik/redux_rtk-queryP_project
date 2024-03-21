export interface IUser {
    id: number
    name: string

    getUserById?: (id: number) => Promise<IUser>
}

export interface IInintialState {
    isLoading: boolean
    error: string | null
    user: IUser
}