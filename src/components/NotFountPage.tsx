import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">

          <h1 className="text-[120px] font-bold tracking-tight text-gray-950 leading-none">
            404
          </h1>

          <div className="h-1 w-24 bg-gray-950 mx-auto my-6 rounded"></div>

          <h2 className="text-3xl font-semibold text-gray-900">
            We can’t find that page
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            The page might have been removed, renamed, or is temporarily unavailable.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-gray-950 text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              Back to Home
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Go Back
            </button>
          </div>

        </div>
      </div>

      <div className="h-12 flex items-center justify-center text-sm text-gray-400 border-t">
        Code Lab Movie Channel
      </div>

    </div>
  );
};

export default NotFoundPage;
