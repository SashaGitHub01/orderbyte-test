import axios from "axios";

export class TodoApi {
  static getTodos = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return data;
  };
}
