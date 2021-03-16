import { BusinessInfo } from './business-info';
import { WeekAvailability } from './week-availability';

export class Business {
    id?: string;
    info: BusinessInfo;
    availability: WeekAvailability;
}
