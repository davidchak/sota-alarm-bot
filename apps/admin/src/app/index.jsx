import { Theme, presetGpnDark } from "@consta/uikit/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@consta/uikit/Layout";
import styled from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  },
]);

const PageLayout = styled(Layout)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const MenuLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  border-right: 1px solid #ccc;
`;

const ContentLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export function App() {
  return (
    <Theme preset={presetGpnDark} style={{ width: "100%", height: "100%" }}>
      <PageLayout>
        <MenuLayout>
          <div>menu</div>
        </MenuLayout>
        <ContentLayout>
          <RouterProvider router={router} />
        </ContentLayout>
      </PageLayout>
    </Theme>
  );
}
