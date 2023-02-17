declare interface ProductViewDto {

    id: number;

    name: string;

    brand: string;

    description: string;

    categoryId: string

    stock: number;

    price: number;

    category: CategoryViewDto | null;
}