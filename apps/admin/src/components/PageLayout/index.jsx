import { Outlet } from "react-router-dom";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import styled from "styled-components";
import { Menu } from "../Menu";

const PageContainer = styled(Layout)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-default);
`;

const ContentLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  /* height: 100%; */
`;

const ContentHeader = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  max-height: 100px;
`;

export const PageLayout = () => {
  return (
    <PageContainer>
      <Menu />
      <ContentLayout>
        <ContentHeader>
          <Text>Header</Text>
        </ContentHeader>
        <Layout>
          <Outlet />
        </Layout>
      </ContentLayout>
    </PageContainer>
  );
};
