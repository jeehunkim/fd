'use client';
import React, { FormEvent, useState } from 'react';
import Alert from '@/components/Alert/Alert_';

export default function Home() {
  const [onAlert, setOnAlert] = useState(false);
  const [kindOf, setKindOf] = useState('success');
  const [kindOfString, setKindOfString] =
    useState('회원 탈퇴가 완료되었습니다.');

  const alertFalse = () => {
    setOnAlert(false);
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch('./api/withdrawal', {
      method: 'POST',
      body: formData,
    });

    if (response.status !== 200) {
      setKindOf('failed');
      setKindOfString(response.statusText);
      setOnAlert(true);
    } else {
      setKindOf('success');
      setKindOfString('회원정보가 삭제 되었습니다.');
      setOnAlert(true);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold pb-5">Sign Out</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="user@4dist.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              Submit
            </button>
            <div className="flex items-center text-sm"></div>
          </div>
        </form>

        {onAlert && (
          <Alert
            parentState={alertFalse}
            timer={3000}
            headline="Success"
            kindOf={kindOf}
            content={<span className="text-sm">{kindOfString}</span>}
          />
        )}
      </div>
    </div>
  );
}
