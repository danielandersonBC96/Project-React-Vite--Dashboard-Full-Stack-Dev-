
export interface ExpensesByCategory{
    salaries: number;
    supplines:number;
    services: number;
}

export interface Month {
    id: string;
    month: string;
    revenue:  number;
    expenses:number;
    nonOperationalExpenses: number;
    operationalExpenses: number ;

}

export interface Day {
    id:  string;
    data : string;
    revenue: string;
    expenses: number; 

}

export interface GetKpisResponse {
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
    createAt: string;
    updateAt: string;
}



export interface GetProductsResponse {
     id: string;
     _id: string; 
     __v: number;
    price: number;
    expense:number;
    transactions: Array<string>;
    createAt: string;
    updateAt: string;
}