const axios = require('axios');

const baseurl = 'http://localhost:3001/register';

describe('Users Route Test', () => {
    let token;
    test('sign up of new user', () => {
        return axios.post(baseurl + '/register', {
            fname: 'utk',
            lname: 'bha',
            email: 'test123@gmail.com',
            password: 'test123'
        }).then((response) => {
            expect(response.data.status).toMatch('Signup success!');
        }).catch((err) => {
            expect(err.response.status).toBe(500);
            expect(err.response.data.status).toMatch('Username already exists!');
        })
    })
})

test('login of existing user', () => {
    return axios.post(baseurl + '/login_user', {
        email: 'admin123@gmail.com',
        password: 'admin'
    }).then((response) => {
        token = response.data.token;
        expect(response.status).toBe(200);
        expect(response.data.status).toMatch('Login Successful!');
    }).catch((err) => {
        expect(err.response.status).toBe(500);
    })
})



test('falied login of  user', () => {
    return axios.post(baseurl + '/login_user', {
        email: 'lol',
        password: 'admin'
    }).then((response) => {
        token = response.data.token;
        expect(response.status).toBe(200);
        expect(response.data.status).toMatch('Login Successful!');
    }).catch((err) => {
        expect(err.response.status).toBe(500);
    })
})

test('User should be able to view profile', () => {
    return axios.get(baseurl + '/me', {
        'headers': { 'Authorization': 'Bearer ' + token }
    }).then((response) => {
        expect(response.status).toBe(200);
    })
})
