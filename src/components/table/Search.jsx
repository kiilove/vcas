import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Input, InputAdornment, TextField } from "@mui/material";
import { grey, lightBlue } from "@mui/material/colors";
import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  width: 150px;
  height: 30px;
`;

const Search = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchText);
  };
  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        {/* <SearchInput name="filter" /> */}
        {/* <button>Search</button> */}
        <Input
          name="filter"
          startAdornment={
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faSearch} />
            </InputAdornment>
          }
          placeholder="통합검색"
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
      </form>
    </SearchContainer>
  );
};

export default Search;
