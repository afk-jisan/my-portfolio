

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white border border-violet-100 rounded-xl p-10 max-w-md w-full text-center shadow-lg">
        {/* Icon */}
        <div className="text-violet-500 text-5xl mb-4">
          <svg
            className="mx-auto w-12 h-12"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          Uh oh! Something went wrong.
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          We're really sorry, but it looks like the page you're looking for
          doesn't exist or an unexpected error has occurred.
        </p>

        {/* Error tag + button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="text-red-600 text-sm bg-red-100 border border-red-300 px-4 py-1 rounded-md font-mono">
            Error: Not Found
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-violet-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-violet-700 transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
