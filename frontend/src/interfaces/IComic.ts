import { CategoryInterface } from "./ICategory";

export interface ComicsInterface {
    ID?: number;
    Title?: string;
    Description?: string;
    Url?: string;
    Price?: number;
    Image?: string;
    CategoryID?: number;
    Category?: CategoryInterface;
}