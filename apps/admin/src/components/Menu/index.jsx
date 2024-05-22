import { useNavigate, useNavigation } from "react-router-dom";
import { Navbar } from "@consta/header/Navbar";
import { Layout } from "@consta/uikit/Layout";
import styled from "styled-components";
import { useEffect } from "react";

const MenuLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  border-right: 1px solid var(--color-bg-border);
  padding: 20px;
`;

export const Menu = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const getMenuItemLabel = (item) => item.label;
  const onMenuItemClick = (item) => {
    navigate(item.path);
  };
  const getMenuItemActive = (item) => {
    return item.path === window.location.pathname;
  };

  useEffect(() => {
    console.log(navigation);
  })

  const menu = [
    { label: "Задачи", path: "/tasks" },
    { label: "Пользователи", path: "/users" },
  ];

  return (
    <MenuLayout>
      <Navbar
        items={menu}
        getItemLabel={getMenuItemLabel}
        onItemClick={onMenuItemClick}
        getItemActive={getMenuItemActive}
      />
    </MenuLayout>
  )
}
