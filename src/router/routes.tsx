import Layout from "../features/Layout";
import Planets from "../features/Planets";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Planets />,
      },
    ],
  },
];

export default routes;
