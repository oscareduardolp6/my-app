export interface UserData{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface UserDataAPI{
    data: UserData;
}

export interface UserManagmentProps{

}

export interface UserManagmentState{
    user: UserData[];
    currentUserId: number;
}