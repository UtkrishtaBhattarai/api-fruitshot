// use the path of your model
const Register = require("../../models/users");
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

describe("Register Schema test", () => {
  it("Add product testing anything", () => {
    const register = {
      fname: "rajaram",
      email: "rajara32m@gmail.com",
      password: "rajaram"
    };
    return Register.create(register).then(pro_ret => {
      expect(pro_ret.fname).toEqual("rajaram");
    });
  });

  it("to test the update", async () => {
    return Register.findOneAndUpdate(
      { _id: Object("5e4796737db4f51dc416e39f") },
      { $set: { fname: "ramm" } }
    ).then(register => {
      expect(register.fname).toEqual("ramm");
    });
  });
  // the code below is for delete testing
  it("to test the delete register is working or not", async () => {
    const status = await Register.findByIdAndDelete("5e4796737db4f51dc416e39f");
    expect(status.ok).toBe(1);
  });

});