import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
    id: number;
    title: string;
    image: string,
    price: number;
    quantity: number;
    subtotalPrice: number;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<{ id: number; title: string;image:string, price: number }>) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    subtotalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.subtotalPrice += newItem.price;
            }

            state.totalAmount += newItem.price;
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const existingItem: any = state.items.find((item) => item.id === id);

            if (existingItem) {
                state.totalQuantity--;
                state.totalAmount -= existingItem.price;
            }

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.subtotalPrice -= existingItem.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        }
    }
})


export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer