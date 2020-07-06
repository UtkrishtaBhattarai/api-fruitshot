const axios = require('axios');

const baseurl = 'http://localhost:3001/notification';

describe('Notification Route Test', () => {
    let token;
    test('notofication add', () => {
        return axios.post(baseurl + '/upload_notification', {
            postedDate: "12/12/2000",
    endDate:"10/10/2000",
    description:"i am i am i ",
    title:"lol lol lol",
        }).then((response) => {
            expect(response.data.status).toMatch('Notification Added!');
        }).catch((err) => {
            expect(err.response.status).toBe(500);
            expect(err.response.data.status).toMatch('Not added!');
        })
    })
})




test('User should be able to specific notification', () => {
    return axios.get(baseurl + '/123121').then((response) => {
        expect(response.status).toBe(200);
    })
})

test('User should be able to view all notification', () => {
    return axios.get(baseurl + '/notifications').then((response) => {
        expect(response.status).toBe(200);
    })
})

