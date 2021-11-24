import {
  faCalendarAlt,
  faGraduationCap,
  faIdCard,
  faListUl,
  faPhone,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@mui/material";
import { deepOrange, grey, indigo, blueGrey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0px;
  width: 100%;
  height: 100%;
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
  align-items: center;
  border-radius: 20px;
`;

const MenuBox = styled.div`
  width: 100%;
  height: 80%;
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
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.95);

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
  { id: 1, name: "scheduler", title: "일정표(캘린더)", icon: faCalendarAlt },
  {
    id: 2,
    name: "scheduler",
    title: "할 일 목록(Todo)",
    icon: faListUl,
  },
  { id: 3, name: "scheduler", title: "상담 업무", icon: faPhone },

  { id: 4, name: "scheduler", title: "오늘 성과", icon: faGraduationCap },
  { id: 5, name: "client", title: "고객데이터", icon: faIdCard },
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
              <MenuItem key={item.id}>
                <MenuIcon>
                  <FontAwesomeIcon icon={item.icon} />
                </MenuIcon>
                <MenuTitle>{item.title}</MenuTitle>
              </MenuItem>
            ))}
          </MenuBox>
          <BottomBox>로그아웃</BottomBox>
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default SideMenu;
