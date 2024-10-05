import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface WishlistItem {
    id: number,
    title: string,
    image: string,
    price: number,
    old_price: number,
    discount: number,
    stars: number,
    reviews: number
}

interface WishlistState {
    items: WishlistItem[],
    totalCount: number
}
const initialState: WishlistState = {
    items: [],
    totalCount: 0
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addItemToWishlist: (state, action: PayloadAction<{ id: number; title: string; image: string, price: number, old_price: number, discount: number, stars: number, reviews: number }>) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
                state.items = state.items.filter((item) => item.id !== existingItem.id);
                state.totalCount--;
            } else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    price: newItem.price,
                    old_price: newItem.old_price,
                    discount: newItem.discount,
                    stars: newItem.stars,
                    reviews: newItem.reviews,
                });
                state.totalCount++;
            }
            if (state.totalCount < 0) {
                state.totalCount = 0;
            }
        },
        clearWishlist: (state) => {
            state.items = [];
            state.totalCount = 0
        }
    }
})

export const { addItemToWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
