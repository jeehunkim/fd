import React, { useState, useEffect } from 'react';

interface IAlertProps {
  headline: string;
  content: JSX.Element;
  hideClose?: boolean;
  timer?: number;
  parentState?: any;
  kindOf?: string;
}

const Alert = ({
  headline,
  hideClose,
  timer,
  content,
  parentState,
  kindOf,
}: IAlertProps) => {
  const [isAlertOpen, setAlert] = useState(true);

  useEffect(() => {
    if (timer) {
      const timeId = setTimeout(() => {
        setAlert(false);
        parentState(false);
      }, timer);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, [timer]);

  const closeAlert = () => {
    setAlert(false);
  };

  const classAlert =
    kindOf === 'success'
      ? 'text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
      : 'text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400';
  const classNameAlert = `fixed flex items-center p-4 mb-4 ${classAlert}`;

  const classButton =
    kindOf === 'success'
      ? 'bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700'
      : 'bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700';
  const classNameButton = `ms-auto -mx-1.5 -my-1.5 ${classButton}`;

  // flex flex-col justify-center min-h-screen overflow-hidden max-w-sm mx-auto
  // fixed max-w-fit top-0 right-0 left-0 mx-auto mt-4 z-50
  return (
    <>
      {isAlertOpen && (
        <div id="alert-1" className={classNameAlert} role="alert">
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">{headline}</span>
          <div className="ms-3 text-sm font-medium">{content}</div>

          {!hideClose && (
            <button
              type="button"
              className={classNameButton}
              data-dismiss-target="#alert-1"
              aria-label="Close"
              onClick={closeAlert}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
