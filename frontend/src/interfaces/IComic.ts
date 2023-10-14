import { CategoryInterface } from "./ICategory";

export interface ComicsInterface {
    ID?: number;
    Title?: string;
    Description?: string;
    Url?: string;
    Price?: number;
    Image?: string;
    Category_id?: number;
    Category?: CategoryInterface;
}