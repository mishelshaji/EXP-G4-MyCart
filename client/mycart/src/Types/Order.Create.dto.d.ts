declare interface OrderCreateDto{

    customerId: number;

    customer: string;

    deliveryAddress: string;

    paymentStatus: string;

    orderTime: Date;

    totalPrice: number;

}