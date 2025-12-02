import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
        id: null,
        img: null,
        title: null,
        description: null,
        genre: null,
        long: null,
        lat: null,
        dishes: null,
        address: null,
        rating: null
    },
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        },
 
    },
})

export const { setRestaurant } = restaurantSlice.actions
export const selectRestuarant = (state) => state.restaurant.restaurant
export default restaurantSlice.reducer