// slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Login funksiyasını async thunk olaraq yaratmaq
export const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://your-backend-url.com/api/login', userData); // Backend API URL-i
        return response.data.token; // Geri gələn token
    } catch (error) {
        return rejectWithValue(error.response.data); // Xətanı reject etmək
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, isAuthenticated: false },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
