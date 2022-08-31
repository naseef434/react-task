
import "./App.css";
import axios from "axios";

function App() {
  const user = {
    first_name: "Naseef",
    last_name: "leader",
    email: "naseef@gmail.com",
  };

  const updteUser = {
    first_name: "Naseef p",
    last_name: "leader",
    email: "naseef@gmail.com",
  };

  const addUser = async () => {
    const resp = await axios.post(`https://reqres.in/api/users`, user);
    console.log({ resp });
  };

  const getUsers = async () => {
    const resp = await axios.get(
      `https://reqres.in/api/users?page=1&per_page=10`
    );
    console.log({ resp });
  };

  const updateUser = async () => {
    const resp = await axios.put(`https://reqres.in/api/users/55`, updteUser);
    console.log({ resp });
  };

  return (
    <div className="App">
      
        <button onClick={addUser}>Post</button>
        <button onClick={getUsers}>Get all</button>
        <button onClick={updateUser}>update user</button>
         <h2>To view the result check console!</h2>
    </div>
  );
}

export default App;
