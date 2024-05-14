import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="min-h-full min-w-full absolute left-0 top-0 grid place-items-center bg-slate-100">
        <div className="text-4xl">
          <h1 className="mb-5">
            The resource you are looking for is not found
          </h1>
          <Link to="/" className="text-blue-500 underline">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
