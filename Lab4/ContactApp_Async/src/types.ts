
export interface Contact {
    id: string;
    name: string;
    avatar: string;
    phone: string;
    cell: string;
    email: string;
    favorite: boolean;
}

export type RootStackParamList = {
    Contacts: undefined;  
    ProfileContact: { contact: Contact };
    Favorites: undefined;  
};