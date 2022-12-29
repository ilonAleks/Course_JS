const Good = require("../models/Good");
const Category = require("../models/Category");
const goodsMock = require("../../client/src/app/mockData/goods.json");
const categoriesMock = require("../../client/src/app/mockData/categories.json");

module.exports = async () => {
  const categories = await Category.find();
  if (categories.length !== categoriesMock.length) {
    await createInitialEntity(Category, categoriesMock);
  }

  const goods = await Good.find();
  if (goods.length !== goodsMock.length) {
    await createInitialEntity(Good, goodsMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
