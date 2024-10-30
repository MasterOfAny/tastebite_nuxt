export type User = {
    id: string;
    photo?: string | null;
    name: string;
    userName: string;
    email: string;
    hash: string;
    accounts: string[];
    newsletter: boolean;
    recipes: Recipe[];
    favorites: Recipe[];
    createdAt: Date | null;
    updatedAt: Date;
    comments: Comment[];
}

export type Recipe = {
    id: string;
    author_id: string;
    author: User;
    favorites: User[];
    image?: string;
    video?: string;
    rating: number;
    name: string;
    category_id: string;
    category: Category;
    trend: number;
    annotation?: string;
    ingridients: string[];
    nutrition: Record<string, any>;
    stats: Record<string, any>;
    directions: string[];
    created_at?: Date;
    updated_at: Date;
    comments: Comment[];
}

export type Category = {
    id: string;
    name: string;
    image: string;
    recipes: Recipe[];
}

export type Comment = {
    id: string;
    user_id: string;
    user: User;
    recipe_id: string;
    recipe: Recipe;
    text: string;
    likes: number;
    rating: number;
    replies: Comment[];
    parent?: Comment;
    parentid?: string;
    created_at?: Date;
    updated_at: Date;
}

export type Collections = {
    id: string;
    name: string;
    image: string;
    recipes: Recipe[];
}

export type Form = {
    url: string,
    method: 'POST' | 'GET',
    body?: { [key: string]: any } | FormData
}

export type FormField = {
    value: any,
    error: string,
    validator: any
}

export type FormFields = {
    [key: string]: FormField
}