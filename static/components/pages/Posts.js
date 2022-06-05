import AbstractView from "./AbstractView.js";
import { jsonData } from "../../data/mul-00001.js";

const data = jsonData[0].data;

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
      <p>॥ নমো তস্স ভগৰতো অরহতো সম্মাসম্বুদ্ধস্স॥</p>
      <h1>${jsonData[0].root}</h1>
      <h3>${jsonData[0].book}</h3>
      <h2>${jsonData[0].chapter}</h2>
        ${data.map((item) => "<p>" + item + "</p>").join("")}
    `;
  }
}
