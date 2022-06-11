export default function getData() {
  const url = "../../data/mul-00001";

  const loadJSON = (callback) => {
    const xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    xObj.open("GET", url, true);
    xObj.onreadystatechange = () => {
      if (xObj.readyState === 4 && xObj.status === 200) {
        callback(xObj.responseText);
      }
    };
    xObj.send(null);
  };

  const init = () => {
    loadJSON((response) => {
      console.log("response =", response);
      const json = JSON.parse(response);
      console.log("your local JSON =", JSON.stringify(json, null, 4));
      const app = document.querySelector("#app");
      app.innerHTML = `<pre>${JSON.stringify(json, null, 4)}</pre>`;
    });
  };

  init();
}

// const item = data.map((item) => item).join("\n");
// console.log(item);
// console.log(getData());
// console.log(JSON.stringify(url[0].data, null, 2));
