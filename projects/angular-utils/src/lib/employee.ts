import { Person } from './person';
import { WeekAvailability } from './week-availability';

export class Employee implements Person {
    id: string;
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
    avatar?: string;
    email?: string;
    phoneNumber?: string;
    availability: WeekAvailability;
}
