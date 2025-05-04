import { CategoryType, NavigationItemType } from "./globalTypes";

export const TransactionCategories: CategoryType[] = [
  {
    categoryGroup: "---",
    categories: ["Choose a Category"],
  },
  {
    categoryGroup: "Food",
    categories: ["Eating out (Alone)", "Eating out (Social)", "Groceries"],
  },
  {
    categoryGroup: "Leisure",
    categories: ["Subscriptions", "Entertainment", "Clothing/Shoes", "Travel"],
  },
  {
    categoryGroup: "Utilities",
    categories: [
      "Transportation (Car)",
      "Transportation (Public)",
      "Other utilities",
    ],
  },
  {
    categoryGroup: "Miscellaneous",
    categories: ["Gifts/Donations", "Medical/Necessity", "Other miscellaneous"],
  },
  {
    categoryGroup: "Investments",
    categories: ["Health/Fitness", "Education", "Investment", "Savings"],
  },
  {
    categoryGroup: "Income",
    categories: ["Wages", "Other Income"],
  },
];

export const NavigationItems: NavigationItemType[] = [
  {
    title: "Dashboard",
    link: "/",
  },
  {
    title: "Transactions",
    link: "/transactions",
  },
  {
    title: "Assets",
    link: "/assets",
  },
];
