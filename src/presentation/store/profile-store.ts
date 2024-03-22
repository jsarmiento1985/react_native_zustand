import { create } from "zustand";

export interface ProfileState {
    name: string;
    email: string; 
    changeProfile: (name: string, email: string) => void;

}


export const useProfileStore = create<ProfileState>()( (set, get) => ({
    name: 'john Doe',
    email: 'johnDoe@google.com',

    changeProfile: (names: string, emails: string) =>{
        console.log(get());
        set({name: names, email: emails})

    }

})); 