import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://en.wikipedia.org/w/rest.php/v1/search/title?q=Foo",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getPages() {
    return apiClient.get("&limit=10");
  }
};
