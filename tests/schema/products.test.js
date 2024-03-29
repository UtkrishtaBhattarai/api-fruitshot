// use the path of your model
const Product = require("../../models/product");
const mongoose = require("mongoose");
// use the new name of the database
const url = "mongodb://localhost:27017/fruitshit_api_test";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Product Schema test", () => {
  // the code below is for insert testing
  it("Add product testing anything", () => {
    const product = {
      name: "Apple",
      price: 1233
    };
    return Product.create(product).then(pro_ret => {
      expect(pro_ret.name).toEqual("Bike Chasis");
    });
  });

  it("to test the update", async () => {
    return product
      .findOneAndUpdate(
        { _id: Object("5f0533e2a719b93f6447bfae") },
        { $set: { name: "apple" } }
      )
      .then(product => {
        expect(product.name).toEqual("apple");
      });
  });

  //the code below is for delete testing
  it("to test the delete register is working or not", async () => {
    const status = await Product.deleteMany();
    expect(status.ok).toBe(1);
  });
});