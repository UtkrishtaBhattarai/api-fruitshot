//path of the model here
//as the developmemt is TDD we need to do testing first
const Users=require('../models/users');
const mongoose=require('mongoose');

//new name of database
const url='mongodb://localhost:27017/test_database';
beforeAll(async()=> {
    await mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    });
});

afterAll(async()=>{
    await mongoose.connection.close();
});

describe(' Product Schema Test',()=>{
    //for insert testing
    it('Add Product',()=>{
        const user={
            'name':'TP2USB',
            'price':'12',
            'usage':'very nice'
        }
    })

})

