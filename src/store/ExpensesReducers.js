import { createSlice } from "@reduxjs/toolkit";

const initialExpensesState={
    ExpenseItem:[]
}
const ExpenseSlice=createSlice({
    name:'Expenses',
    initialState:initialExpensesState,
    reducers:{
        setExpense(state,actions){
            console.log(actions.payload);
            state.ExpenseItem=actions.payload
        }
    }
})

export const ExpenseActions=ExpenseSlice.actions;

export default ExpenseSlice.reducer