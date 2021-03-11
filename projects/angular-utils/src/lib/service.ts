import { MatColor } from './mat-color';

export class Service {
    id: string;
    name: string;
    description: string;
    estimatedTime: number;
    price: number;
    gender: string;
    paymentOption: 'pay-at-venue' | 'pay-with-credit-card' | 'both';
    color: MatColor;
}
