import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import BottomNav from "../components/BottomNav";

export async function loader() {
  return null;
}

export default function Root() {
  return (
    <>
      <NavBar />
      <BottomNav />
      <Outlet />
    </>
  );
}
