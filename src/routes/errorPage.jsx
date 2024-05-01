import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Womp Womp</h1>
      <p>Looks like something went wrong...</p>
      {/* <i>{error.statusText || error.message}</i> */}
      <button className="button">
        <a href="/">Go Home</a>
      </button>
    </div>
  );
}
