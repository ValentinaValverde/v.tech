import { Outlet } from "react-router-dom";

export async function loader() {
  return null;
}

export default function Root() {
  return (
    <>
      <p>this is the root route</p>
      <Outlet />
    </>
  );
}
