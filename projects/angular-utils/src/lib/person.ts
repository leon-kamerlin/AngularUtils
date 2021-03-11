export class Person {
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
    email?: string;
    phoneNumber?: string;
    avatar?: string;
}

export type Client = Person;

