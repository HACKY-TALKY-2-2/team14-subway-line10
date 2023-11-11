import React, { useState, useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Card } from "../component/Cards/Card.js";
import { SearchBar } from "../component/SearchBar/SearchBar.js";

const InputSection = styled.div(
  () =>
    css`
      display: flex;
      width: 330px;
      padding: 10px 0px;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    `
);


export function LoginPage() {
  const [loginInput, setLoginInput] = useState({email: "", password: ""});
  
  const loginSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/users/login", {
        email: loginInput.email,
        password: loginInput.password,
      });
      console.log(response);
      if (response.data.length === 0) {
        alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
        return;
      }
      console.log(response.data);
      alert("로그인 성공!");
      return;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Login Page</p>
        <form>
          <InputSection>
            <input 
              type="text"
              placeholder="email" 
              value={loginInput.email}
              onChange={(e) => {
                setLoginInput({...loginInput, email: e.target.value});
              }}
            />
            <input 
              type="password" 
              placeholder="password" 
              value={loginInput.password}
              onChange={(e) => {
                setLoginInput({...loginInput, password: e.target.value});
              }}
            />
          </InputSection>
          <button onClick={(e) => {
            e.preventDefault();
            loginSubmit();
          }}>Login</button>
          not a member? <button>Go Sign Up</button>
        </form>
      </header>
    </div>
  );
}