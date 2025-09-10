import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: []
    }
    reducers: {
        addContact(state, action) {},
        deleteContact(state, action) {}
    }
})