import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import ParentContainer from "./container/ParentContainer";
import Home from "./components/Home";
import ReadMore from "./components/ReadMore";
import { NewsLoader } from "./loaders/Newsloader";
import Notfound from "./components/Notfound";

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<ParentContainer />}>
    <Route path="/" element={<Home />} loader={NewsLoader} />
    <Route path="/ReadMore/:msg/:author" element={<ReadMore />} />
    <Route path="*" element={<Notfound />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
