import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data.json";

const users = data;

export default function App() {
  let navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [display, setDisplay] = useState("");

  const checkUser = (e) => {
    e.preventDefault();
    const usercheck = users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (usercheck) {
      setDisplay("Login successful");
      setTimeout(() => {
        navigate("/welcome");
      }, 5000);
    } else {
      setDisplay("Wrong password or username");
      setTimeout(() => {
        navigate("/registration");
      }, 5000);
    }
    console.log(usercheck);
  };

  console.log(data);
  return (
    <div className="App">
      <form onSubmit={checkUser}>
        <div className="input-text">
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Username"
            aria-describedby="inputGroupPrepend2"
            required
            onChange={changeHandler}
            style={{
              marginTop: "30px",
              width: "25%",
              borderRadius: "5px",
              borderBlockColor: "black",
            }}
          />
        </div>
        <div className="input-text">
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            aria-describedby="inputGroupPrepend2"
            required
            onChange={changeHandler}
            style={{
              marginTop: "30px",
              width: "25%",
            }}
          />
          <div>
            <button
              type="submit"
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                color: "#370752",
                width: "100px",
                height: "40px",
              }}
            >
              Login
            </button>
          </div>
          <p>{display}</p>
        </div>
      </form>
    </div>
  );
}
