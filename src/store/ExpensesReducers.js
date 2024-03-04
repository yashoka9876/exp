import { createSlice } from "@reduxjs/toolkit";

const initialExpensesState={
    ExpenseItem:[],
    premium:false,
    totalExpeses:0
}
const ExpenseSlice=createSlice({
    name:'Expenses',
    initialState:initialExpensesState,
    reducers:{
        setExpense(state,actions){
            console.log(actions.payload);
            state.ExpenseItem=actions.payload
        },
        addUpTotal(state,actions){
            console.log('this is function of add up to');
            console.log(state.totalExpeses)
            console.log(actions.payload)
            state.totalExpeses+= state.totalExpeses+(+actions.payload);
            if(state.totalExpeses>=10000){
                state.premium=true;
                localStorage.setItem('premium',true);
            }
        }
        
    }
})

export const ExpenseActions=ExpenseSlice.actions;

export default ExpenseSlice.reducer