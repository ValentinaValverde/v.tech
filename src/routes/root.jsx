import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export async function loader() {
  return null;
}

export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
