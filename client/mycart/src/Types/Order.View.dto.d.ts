declare interface OrderViewDto {
    
    readonly id: number;

    customerId: number;

    customer: string;

    deliveryAddress: string;

    paymentStatus: string;

    orderTime: Date;

    totalPrice: number;

}