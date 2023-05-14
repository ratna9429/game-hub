import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2fe71c2cb40a430a8d68e3db88c6beb9",
  },
});
