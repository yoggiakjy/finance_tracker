export type CategoryType = {
    categoryGroup: string;
    categories: string[];
};
export interface FinancialRecord {
    _id?: string;
    userId: string;
    date: Date;
    category: string;
    description: string;
    amount: number;
};

export interface FinancialBalance {
    _id?: string;
    userId: string;
    balance: number;
}

export type NavigationItemType = {
    title: string;
    link: string;
};