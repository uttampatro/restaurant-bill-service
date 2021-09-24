export interface RestaurantDTO {
    name: string;
    description: string;
    imageUrl: string;
}

export interface CreateRestaurantDTO {
    userId: string;
    name: string;
    description: string;
    imageUrl: string;
}
