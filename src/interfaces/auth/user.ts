export interface User{
    username: string;
    password:string;
    name?:string;
    surname?:string;
    email? :string;
    phone? :number;
    photo?:string
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumber: boolean;
    requireMinLength: boolean;
}

export interface User2{
    username:string;
    password:string;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumber: boolean;
    requireMinLength: boolean;
}