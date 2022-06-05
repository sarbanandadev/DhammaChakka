const jsonData = require("../../data/mul-00001");

export default function getData() {
  return JSON.stringify(jsonData[0].data, null, 2);
}

// const item = data.map((item) => item).join("\n");
// console.log(item);
// console.log(getData());
// console.log(JSON.stringify(jsonData[0].data, null, 2));