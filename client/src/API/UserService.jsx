import axios from "axios";

export default class {
  static async authorize(email) {
    const response = await axios.post("http://localhost:3000/users/authorize", {
      email: "" || email,
    });

    return response.data.message;
  }
}
