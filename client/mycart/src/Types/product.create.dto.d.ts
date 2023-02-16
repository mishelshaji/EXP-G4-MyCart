declare interface ProductViewDto {

    id: number;

    Name: string;

    Brand: string;

    Description: string;

    CategoryId: string

    Stock: number;

    Price: number;

    Category: CategoryViewDto | null;
}