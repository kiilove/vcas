import {
  faCalendarAlt,
  faGraduationCap,
  faIdCard,
  faListUl,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { grey, indigo, blueGrey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0px;
  width: 100%;
`;

const LogoBox = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;

const LogoText = styled.span`
  font-size: 35px;
  font-weight: 700;
  color: ${blueGrey[700]};

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
`;

const MenuBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MenuIcon = styled.span`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  color: ${grey[600]};
`;

const MenuTitle = styled.span`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: ${grey[600]};
`;

const MenuItem = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.45);
    cursor: pointer;
    border-radius: 10px;
  }

  &:hover ${MenuIcon} {
    color: ${indigo[700]};
  }
`;

const BottomBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const menuArray = [
  {
    id: 1,
    name: "scheduler",
    title: "?????????(?????????)",
    icon: faCalendarAlt,
    link: "/",
  },
  {
    id: 2,
    name: "scheduler",
    title: "??? ??? ??????(Todo)",
    icon: faListUl,
    link: "/",
  },
  {
    id: 3,
    name: "scheduler",
    title: "?????? ??????",
    icon: faPhone,
    link: "/tmManager",
  },

  {
    id: 4,
    name: "scheduler",
    title: "?????? ??????",
    icon: faGraduationCap,
    link: "/",
  },
  {
    id: 5,
    name: "client",
    title: "???????????????",
    icon: faIdCard,
    link: "/client",
  },
];

const SideMenu = () => {
  return (
    <Container>
      <Wrapper>
        <ItemWrapper>
          <LogoBox style={{ marginBottom: 15 }}>
            <LogoText>V.CAS</LogoText>
          </LogoBox>
          <MenuBox>
            {menuArray.map((item) => (
              <Link
                to={item.link}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MenuItem key={item.id}>
                  <MenuIcon>
                    <FontAwesomeIcon icon={item.icon} />
                  </MenuIcon>
                  <MenuTitle>{item.title}</MenuTitle>
                </MenuItem>
              </Link>
            ))}
          </MenuBox>
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default SideMenu;
