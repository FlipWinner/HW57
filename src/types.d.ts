interface UserMutation {
    name: string;
    email: string;
    online: boolean;
    role: 'user' | 'editor' | 'admin';
}

export interface IUser {
    name: string;
    email: string;
    online: boolean;
    role: 'user' | 'editor' | 'admin';
    id: string;
}