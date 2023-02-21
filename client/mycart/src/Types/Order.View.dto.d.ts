declare interface OrderViewDto {
    
    orderId: number;

    product: ProductViewDto;

    deliveryAddress: string;

    orderTime: Date;

    offerPrice: number;

    retailPrice: number;


}