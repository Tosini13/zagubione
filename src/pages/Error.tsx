import { Link, useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      data-testid="error"
      className="min-h-section-minus-header grid place-content-center"
    >
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="text-lg">Sorry, an unexpected error has occurred.</p>
        <Link className="link mt-4 block" to={"/"}>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
