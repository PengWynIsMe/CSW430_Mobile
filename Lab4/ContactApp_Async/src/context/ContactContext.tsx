import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Contact } from '../types'; // Import kiểu dữ liệu ta vừa tạo
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface ContactContextType {
    contacts: Contact[];
    loading: boolean;
    fetchContacts: () => Promise<void>;
    toggleFavorite: (id: string) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({children}:{children: ReactNode}) => {
    const [contacts, setContacts]  = useState<Contact[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchContacts = async () => {
        setLoading(true);
        try {
            const storedContacts = await AsyncStorage.getItem('contacts');

            if(storedContacts){
                setContacts(JSON.parse(storedContacts));
            } else {
                const response = await fetch('https://randomuser.me/api/?results=20');
                const data  = await response.json();

                const formattedContacts: Contact[] = data.results.map((item:any) => ({
                    id: item.login.uuid || uuidv4(),
                    name: `${item.name.first} ${item.name.last}`,
                    avatar: item.picture.large,
                    phone: item.phone,
                    cell: item.cell,
                    email: item.email,
                    favotite: Math.random() < 0.2,
                }))

                setContacts(formattedContacts);

                await AsyncStorage.setItem('contacts', JSON.stringify(formattedContacts));
            }
        } catch(e){
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const toggleFavorite = async (id: string) => {
        const newContacts = contacts.map(contact =>
            contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
        );

        setContacts(newContacts);

        await AsyncStorage.setItem('contacts', JSON.stringify(newContacts));
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <ContactContext.Provider value = {{ contacts, loading, fetchContacts,toggleFavorite}}>
            {children}
        </ContactContext.Provider>
    )
};

export const useContacts = () => {
    const context = useContext(ContactContext);
    if(!context){
        throw new Error('error');
    }
    return context;
}