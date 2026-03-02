import { Category } from "./category.model";

export type Card = {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    images: string[];
    link: string;
    likes: number;
    category: Category;
}
