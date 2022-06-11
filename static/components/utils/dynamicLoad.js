const css = [
    "style.css"
];
const js = [
    "main.js"
];

let filesAdded = "";

function loadJS() {
  if (filesAdded.indexOf("script.js") !== -1) return;
  let head = document.getElementsByTagName("head")[0];
  let script = document.createElement("script");
  script.src = "script.js";
  script.type = "text/javascript";
  head.append(script);
  filesAdded += " script.js";
}

function loadCSS() {
  if (filesAdded.indexOf("styles.css") !== -1) return;
  let head = document.getElementsByTagName("head")[0];
  let style = document.createElement("link");
  style.href = "styles.css";
  style.type = "text/css";
  style.rel = "stylesheet";
  head.append(style);
  filesAdded += " styles.css";
}

addScript("script.js");

// Include script file
function addScript(filename) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = filename;
  script.type = "text/javascript";

  head.append(script);
}

addCSS("style.css");

// Include CSS file
function addCSS(filename) {
  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("link");
  style.href = filename;
  style.type = "text/css";
  style.rel = "stylesheet";
  head.append(style);
}
