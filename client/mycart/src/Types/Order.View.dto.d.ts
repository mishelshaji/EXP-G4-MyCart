declare interface OrderViewDto {
    
    readonly id: number;

    CustomerId: number;

    Customer: string;

    DeliveryAddress: string;

    PaymentStatus: string;

    OrderTime: Date;

    TotalPrice: number;

}