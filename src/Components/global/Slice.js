import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:{
        vendors:[],
        buyers:[],

    },
    loginInfo: {
        isLoggedIn: false,
        loggedInUser:{}

    },
    foodCart:[],
    cart:[],
    total:0,
}
const Slice = createSlice({
    name :"laCurve",
        initialState,
    reducers: {
        signUp :(state,{payload})=>{
            if(payload.role === "vendor") {
                state.users.vendors.push(payload)
            }else{
                state.users.buyers.push(payload)
            }
        },
        vendorLogin : (state,{payload})=>{
            const checkVendor = state.users.vendors.findIndex[(e)=>e.email=== payload.email]
            if(checkVendor !== -1){
                if(state.users.vendors[checkVendor].password !== payload.password){
                    alert("Paswword Incorrect")
                }else{
                    alert("login successful")
                }
            }
        },
        buyerLogin: (state, {payload})=>{
            const checkVendor = state.users.buyers.findIndex((e)=> e.email === payload.email)
          if(checkVendor !== -1){
            if(state.users.buyers[checkVendor].password !== payload.password){
                throw new Error("password incorrect")
            }else {
                state.loginInfo.isLoggedIn = true;
                state.loginInfo.loggedInUser = payload;
            }
          } else{
         throw new Error("user not found check email")
          }
        },
        addToCart:(state,{payload})=>{
            const check = state.cart.findIndex((e)=> e.id == payload.id);
            if (check === -1){
              state.cart.push({...payload,QTY:1, totalPrice :payload.price},
              )
            }else{
              let value = state.cart[check];
              value.QTY +=1;
              value.totalPrice=payload.price * value.QTY
    
            }
            state.total = state.cart.reduce((p,e)=> p + (e.QTY * e.price),0)
            state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);
    
    
          },
          deleteCart:(state,{payload}) => {
            state.cart = state.cart.filter((e)=>e?.id !== payload?.id)
          state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);
          state.total = state.cart.reduce((p,e)=> p + (e.QTY * e.price),0)
    
    
          },
          incrementQty: (state, { payload }) => {
            const item = state.cart.find(e => e.id === payload.id);
            if (item) {
                item.QTY += 1;
                item.totalPrice = item.price * item.QTY;
                state.total = state.cart.reduce((total, e) => total + e.totalPrice, 0);
                state.totalQty = state.cart.reduce((qty, item) => qty + item.QTY, 0);
            }
        },
        
          decrementQTY:(state,{payload}) =>{
            const checkItem = state.cart.findIndex((e)=> e.id === payload.id);
            if (state.cart[checkItem].QTY === 1){
              state.cart= state.cart.filter((e)=>e.id !== payload.id);
            }
        }
    

    },

    
   
    

})
export const {signUp,vendorLogin,isLoggedIn,buyerLogin,loggedInUser,addToCart,deleteCart,incrementQty,decrementQTY} = Slice.actions
export default Slice.reducer
