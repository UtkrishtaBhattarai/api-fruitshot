const Slider = require("../models/slider");
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

describe("Slider Schema test", () => {
    
  // the code below is for insert testing
  it("Add product testing anything", () => {
    const slider = {
      image: "imageFile-123123",
    };
    return Slider.create(slider).then(pro_ret => {
      expect(pro_ret.image).toEqual("imageFile-123123");
    });
});
});


it("to test the delete slider is working or not", async () => {
    const status = await Slider.deleteMany();
    expect(status.ok).toBe(1);
  });

