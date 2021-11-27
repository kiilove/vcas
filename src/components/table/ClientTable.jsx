import React from "react";
import styled from "styled-components";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import Search from "./Search";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import ActionButtons from "./ActionButtons";

const ClientTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const Container = styled.div`
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    background-color: rgba(255, 255, 255, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.5);
  `;
  const Wrapper = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const SearchContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  `;

  const SearchWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `;

  const ButtonWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;
  const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
  `;

  const Thead = styled.thead`
    background-color: white;
    height: 45px;
    font-size: 15px;
    font-weight: 500;
  `;

  const TheadTr = styled.tr`
    border-bottom: 2px solid ${grey[400]};
  `;

  const TbodyTr = styled.tr`
    height: 40px;
    background-color: white;
    border-bottom: 1px solid ${grey[200]};
  `;

  const PageConatiner = styled.div`
    background-color: white;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center; ;
  `;

  const PageBox = styled.div`
    width: 23px;
    height: 23px;
    background-color: white;
    border: 1px solid ${grey[400]};
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    margin: 5px;
  `;

  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <SearchWrapper>
            <Search onSubmit={setGlobalFilter} />
          </SearchWrapper>
          <ButtonWrapper>
            <ActionButtons />
          </ButtonWrapper>
        </SearchContainer>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <TheadTr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                  </th>
                ))}
              </TheadTr>
            ))}
          </Thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TbodyTr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </TbodyTr>
              );
            })}
          </tbody>
        </Table>
        <PageConatiner>
          <PageBox style={{ backgroundColor: grey[500], color: "white" }}>
            1
          </PageBox>
          <PageBox>2</PageBox>
          <PageBox>3</PageBox>
          <PageBox>4</PageBox>
        </PageConatiner>
      </Wrapper>
    </Container>
  );
};

export default ClientTable;
