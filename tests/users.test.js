//path of the model here
//as the developmemt is TDD we need to do testing first
const Users=require('../models/users');
const mongoose=require('mongoose');

//new name of database
const url='mongodb://localhost:27001/test_database';
beforeAll(async()=> {
    await mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true
    });
});

afterAll(async()=>{
    await mongoose.connection.close();
});

describe(' User Schema Test',()=>{
    //for insert testing
    it('Add user',()=>{
        const user={
            'fname':'TP2USB',
            'lname':'TP2USB',
            'email':'TP2USB@gmail.com'
        }
    })
    
})