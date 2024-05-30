export interface ProductInterface {
    name: string;
    description: string;
    price: number;
    categories: string[];
    image: FileList;
}

export interface ProductInterfaceObj {
    name: string;
    description: string;
    price: number;
    categories: string[];
    image: File;
}

export interface CategoryType {
    name: string;
}

export interface ProductType {
    id: string;
    image: string;
    name: string;
    price: string | number;
    description: string;
    categories: string[];
}
