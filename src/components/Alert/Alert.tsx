import React, { useState, useEffect } from 'react';

interface IAlertProps {
  icon: JSX.Element;
  headline: string;
  headlineColor: 'text-green-600' | 'bg-red-600';
  content: JSX.Element;
  hideClose?: boolean;
  bgColor: 'bg-green-100' | 'bg-red-100';
  timer?: number;
  parentState?: any;
}

const Alert = ({
  icon,
  headline,
  headlineColor,
  hideClose,
  timer,
  bgColor,
  content,
  parentState,
}: IAlertProps) => {
  const [isAlertOpen, setAlert] = useState(true);

  useEffect(() => {
    if (timer) {
      const timeId = setTimeout(() => {
        // After xx seconds set the show value to false, if exist timer as props
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
  // flex flex-col justify-center min-h-screen overflow-hidden max-w-sm mx-auto
  // fixed max-w-fit top-0 right-0 left-0 mx-auto mt-4 z-50
  return (
    <>
      {isAlertOpen && (
        <div className="fixed max-w-fit justify-center">
          <div className={`relative flex w-full rounded-lg p-4 ${bgColor}`}>
            {!hideClose && (
              <div
                role="button"
                className="absolute rounded-lg p-1 right-0 top-0 mr-2 mt-2"
                onClick={closeAlert}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            )}

            <div className={`flex w-8 h-8 ${headlineColor}`}>{icon}</div>
            <div className="px-2">
              <span className={`mb-2 font-bold ${headlineColor}`}>
                {headline}
              </span>
              <div>{content}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
