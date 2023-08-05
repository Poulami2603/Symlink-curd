import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc1YTBlNjExNDRjMTE2NjhhY2U1NmMiLCJlbWFpbCI6Im5pbG95Lm1Ac3ltbGlua3RlY2guY29tIiwiZmlyc3ROYW1lIjoiTmlsb3kiLCJsYXN0TmFtZSI6Ik1vbmRhbCIsImlhdCI6MTY5MTIzODY0NiwiZXhwIjoxNjkxMjUzMDQ2fQ.A4coEnQM2BVkyLlSoFK9Gfh551C7h5zIhQreFljHeQ8'

export const ListApi = createAsyncThunk('api/lists', async () => {
    const response = await axios.get('https://inloopapp-api.iosx.in/api/v1/asset/list', { headers: { 'Authorization': `Bearer ${authToken}` } })
    return response?.data
})

export const AddApi = createAsyncThunk('Add', async (data) => {
    const response = await axios.post('https://inloopapp-api.iosx.in/api/v1/asset/add', { headers: { 'Authorization': `Bearer ${authToken}` } })
    return response?.data
})

export const EditApi = createAsyncThunk('Edit', async (data) => {
    const response = await axios.put('https://inloopapp-api.iosx.in/api/v1/asset/edit', { headers: { 'Authorization': `Bearer ${authToken}` } })
    return response?.data
})


export const DetailApi = createAsyncThunk('Detail', async () => {
    const response = await axios.get('https://inloopapp-api.iosx.in/api/v1/asset/details/dbaa6658-9dcb-4c15-8add-e77302a25476', { headers: { 'Authorization': `Bearer ${authToken}` } })
    return response?.data
})

export const DeleteApi = createAsyncThunk('Delete', async (e) => {
    try {
        const response = await axios.delete(`https://inloopapp-api.iosx.in/api/v1/asset/delete/${e}`, { headers: { 'Authorization': `Bearer ${authToken}` } })
        return response?.data
    } 
    catch (e) {
        console.log(e);
    }

})

export const CurdSlice = createSlice({
    name: "Curds",
    initialState: {
        loader: "false",
        listValue: [],
        addValue: [],
        editValue: [],
        detailValue: []
    },
    reducers: {},
    extraReducers: {
        // ListApi
        [ListApi.pending]: (state) => {
            state.loader = true
        },
        [ListApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.listValue = payload
            // console.log(payload);
        },
        [ListApi.rejected]: (state) => {
            state.loader = true
            alert("ERROR")
        },
        // AddApi
        [AddApi.pending]: (state) => {
            state.loader = true
        },
        [AddApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.addValue = payload
        },
        [AddApi.rejected]: (state) => {
            state.loader = true
            alert("ERROR")
        },
        // EditApi
        [EditApi.pending]: (state) => {
            state.loader = true
        },
        [EditApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.editValue = payload
        },
        [EditApi.rejected]: (state) => {
            state.loader = true
            alert("ERROR")
        },
        // DetailApi
        [DetailApi.pending]: (state) => {
            state.loader = true
        },
        [DetailApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.detailValue = payload
        },
        [DetailApi.rejected]: (state) => {
            state.loader = true
            alert("ERROR")
        },
        // DeleteApi
        [DeleteApi.pending]: (state) => {
            state.loader = true
        },
        [DeleteApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.deleteValue = payload
        },
        [DeleteApi.rejected]: (state) => {
            state.loader = true
            alert("ERROR")
        }
    }
})

export const { } = CurdSlice.actions 