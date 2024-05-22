import { Theme, presetGpnDark } from "@consta/uikit/Theme";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PageLayout } from '../components/PageLayout'
import { Tasks } from '../pages/Tasks';
import { Users } from '../pages/Users'


const routes = {
  path: "/",
  name: "Главная",
  element: <PageLayout />,
  children: [
    {
      path: "/tasks",
      name: "Задачи",
      element: <Tasks />,
    },
    {
      path: "/users",
      name: "Пользователи",
      element: <Users />,
    },
  ],
};

const router = createBrowserRouter([routes]);


export function App() {
  return (
    <Theme preset={presetGpnDark} style={{ width: "100%", height: "100%" }}>
      <RouterProvider router={router} />
    </Theme>
  );
}
