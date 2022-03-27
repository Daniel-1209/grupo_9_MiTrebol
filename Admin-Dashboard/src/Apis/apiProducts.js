import axios from "axios";
import fetch from "node-fetch";

const productsUrl = "/api/products";

const products = async () => {
  let data = await fetch(productsUrl);


  return  data;
};

export default products;
