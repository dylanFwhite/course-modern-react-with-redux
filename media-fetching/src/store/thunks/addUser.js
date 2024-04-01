import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from '@faker-js/faker'

const addUser = createAsyncThunk(
    'users/add',
    async () => {
        const response = await axios.post('http://localhost:3005/users', {
            name: faker.name.fullName()
        })
        // What we return here is what is passed as the payload in the
        // 'users/add/fulfilled' action
        return response.data
    }
)
export { addUser }
