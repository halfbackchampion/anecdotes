import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addNotification(state, action) {
            return action.payload
        }
    }
})

export const {addNotification} = notificationSlice.actions

export const setNotification = (message, timer) => {
    return dispatch => {
        dispatch(addNotification(message))
        setTimeout(() => dispatch(addNotification("")), timer * 1000)
    }
}

export default notificationSlice.reducer