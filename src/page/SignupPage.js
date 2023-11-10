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

export function SignupPage() {
  const [signupInput, setSignupInput] = useState({name: "", email: "", password: "", passwordCheck: "", userType: 1});

  const signupSubmit = async () => {
    if (signupInput.password !== signupInput.passwordCheck) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/users/join", {
        email: signupInput.email,
        password: signupInput.password,
        user_type: signupInput.userType,
        user_name: signupInput.name,
      });
      alert("회원가입 성공!");
      const loginResponse = await axios.post("http://localhost:8000/api/users/login", {
        email: signupInput.email,
        password: signupInput.password,
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Signup Page</p>
        <form>
          <InputSection>
            <input 
              type="text"
              placeholder="name" 
              value={signupInput.name}
              onChange={(e) => {
                setSignupInput({...signupInput, name: e.target.value});
              }}
            />
            <input 
              type="text"
              placeholder="email" 
              value={signupInput.email}
              onChange={(e) => {
                setSignupInput({...signupInput, email: e.target.value});
              }}
            />
            <input 
              type="password" 
              placeholder="password" 
              value={signupInput.password}
              onChange={(e) => {
                setSignupInput({...signupInput, password: e.target.value});
              }}
            />
            <input 
              type="password" 
              placeholder="password check" 
              value={signupInput.passwordCheck}
              onChange={(e) => {
                setSignupInput({...signupInput, passwordCheck: e.target.value});
              }}
            />
            <checkbox>
              <input 
                type="checkbox" 
                value={signupInput.userType}
                onChange={() => {
                  setSignupInput({...signupInput, userType: 2});
                }}
              />
              <label>관리자</label>
            </checkbox>
          </InputSection>
          <button onClick={(e) => {
            e.preventDefault();
            signupSubmit();
          }}>Signup</button>
          already a member? <button>Go Login</button>
        </form>
      </header>
    </div>
  );
}