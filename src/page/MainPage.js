import React, { useState, useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Card } from "../component/Cards/Card.js";
import { SearchBar } from "../component/SearchBar/SearchBar.js";
import Layout from "../component/layout/Layout.jsx";

const CardSection = styled.div(
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

const tagNames = {
  1: "announcement",
  2: "service_disruption",
  3: "railway_accident",
  4: "train_accident",
  5: "casuality",
  6: "disaster",
};

export function MainPage() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredPosts = searchQuery
    ? posts.filter((post) =>
        tagNames[post.type_id].toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts;

  return (
    <div className="App">
      <Layout />
      <header className="App-header">
        <CardSection>
          <SearchBar />
          {filteredPosts.map((post, index) => (
            <Card
              key={index}
              typetag={tagNames[post.type_id]}
              linetag="lineTwo"
              title={post.title}
              content={post.content}
            />
          ))}
        </CardSection>
      </header>
    </div>
  );
}
