import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4bb3df193f3d4f7fbe098dffaa3a4c87",
  },
});
