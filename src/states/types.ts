
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
    monOperationExpenses: number;
    operationalExpense: number ;

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
   expenseByCategory: ExpensesByCategory;
   monthlyData: Array<Month>;
   dalyData:Array<Day>
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