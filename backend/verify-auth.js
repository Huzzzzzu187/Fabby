import axios from 'axios';
import 'dotenv/config';

const backendUrl = 'http://localhost:4000';
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

async function verify() {
    try {
        console.log('Testing Admin Login with:', adminEmail);
        const loginResponse = await axios.post(`${backendUrl}/api/user/admin`, {
            email: adminEmail,
            password: adminPassword
        });

        if (loginResponse.data.success) {
            console.log('Login Successful! Token:', loginResponse.data.token);
            const token = loginResponse.data.token;

            console.log('\nTesting Protected Route (/api/product/add) with token...');
            try {
                const addResponse = await axios.post(`${backendUrl}/api/product/add`, {}, {
                    headers: { token }
                });
                if (addResponse.data.success) {
                    console.log('Product added successfully!');
                } else {
                    console.log('Product Addition Feedback:', addResponse.data.message);
                }
            } catch (error) {
                console.log('Add Product Error:', error.response ? error.response.data : error.message);
            }
        } else {
            console.log('Login Failed:', loginResponse.data.message);
        }
    } catch (error) {
        console.error('Error during verification:', error.message);
    }
}

verify();
