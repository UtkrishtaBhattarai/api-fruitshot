// use the path of your model
const Order = require("../../models/order");
const mongoose = require("mongoose");
// use the new name of the database
const url = "mongodb://localhost:27017/fruitshot_api_test";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});

describe("Order Schema test", () => {
  it("Add Order testing anything", () => {
    const Order = {
      userid: "98327439",
      productid: "jbsajdb87y78",
      quantity:"2"
    };
    return order.create(Order).then(pro_ret => {
      expect(pro_ret.userid).toEqual("98327439");
    });
  });
  it("to test the delete order is working or not", async () => {
    const status = await Order.deleteMany();
    expect(status.ok).toBe(1);
  });
});