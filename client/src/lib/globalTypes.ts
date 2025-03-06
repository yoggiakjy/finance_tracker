export type CategoryType = {
    categoryGroup: string;
    categories: string[];
};
export interface FinancialRecord {
    id?: string;
    userId: string;
    date: string;
    category: string;
    description: string;
    amount: number;
};

export type NavigationItemType = {
    title: string;
    link: string;
};