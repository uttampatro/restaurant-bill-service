export interface SaveUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface UserDTO {
    _id: string;
    name: string;
    email: string;
    password: string;
}
export interface DeleteDTO {
    name: string;
    email: string;
}

export interface LoginUserDTO {
    email: string;
    // password: string;
}
