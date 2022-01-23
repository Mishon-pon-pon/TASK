const fs = require("fs");

const places = [
  { placeId: 1, name: "Москва", parentId: 8 },
  { placeId: 2, name: "Нью-Йорк", parentId: 12 },
  { placeId: 3, name: "Казань", parentId: 8 },
  { placeId: 4, name: "Санкт-Петербург", parentId: 8 },
  { placeId: 5, name: "Хьюстон", parentId: 12 },
  { placeId: 6, name: "Владивосток", parentId: 8 },
  { placeId: 7, name: "Сан-Антонио", parentId: 12 },
  { placeId: 8, name: "Россия" },
  { placeId: 9, name: "Томск", parentId: 8 },
  { placeId: 10, name: "Чикаго", parentId: 12 },
  { placeId: 11, name: "Финикс", parentId: 12 },
  { placeId: 12, name: "США" },
];

fs.writeFileSync(__dirname + "/places.json", JSON.stringify(places));
