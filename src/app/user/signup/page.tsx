'use client';
import React, { FormEvent, useState } from 'react';
import Alert from '@/components/Alert/Alert_';
import { getEnumKeys } from '@/utils/common';
import { AccountRoles } from '@/types/accountRole';

export default function Home() {
  const [onAlert, setOnAlert] = useState(false);
  const [kindOf, setKindOf] = useState('success');
  const [kindOfString, setKindOfString] =
    useState('회원 탈퇴가 완료되었습니다.');
  const [accountRole, setAccountRole] = useState<AccountRoles>(
    AccountRoles.ADMIN,
  );

  const onRoleChange = async (e: any) => {
    const role = AccountRoles[e.target.value as keyof typeof AccountRoles];
    setAccountRole(role);
  };

  const alertFalse = () => {
    setOnAlert(false);
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const pushreceive = formData.get('pushreceive');
    const emailreceive = formData.get('emailreceive');

    pushreceive === null
      ? formData.set('pushreceive', 'false')
      : formData.set('pushreceive', 'true');
    emailreceive === null
      ? formData.set('emailreceive', 'false')
      : formData.set('emailreceive', 'true');

    const response = await fetch('../api/signup', {
      method: 'POST',
      body: formData,
    });

    if (response.status !== 200) {
      setKindOf('failed');
      setKindOfString(response.statusText);
      setOnAlert(true);
    } else {
      setKindOf('success');
      setKindOfString('회원가입을 완료했습니다.');
      setOnAlert(true);
    }
    // console.log(response);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold pb-5">Sign Up</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">email</label>
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
            <label className="block mb-2 text-sm font-medium">name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">nickname</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                id="pushreceive"
                name="pushreceive"
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="block mb-2 ml-2 text-sm font-medium">
                Push Alarm
              </span>
            </label>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                id="emailreceive"
                name="emailreceive"
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="block mb-2 ml-2 text-sm font-medium">
                Email Receive
              </span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
              Select Role
            </label>
            <select
              id="usertype"
              name="usertype"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={accountRole}
              onChange={onRoleChange}
            >
              {getEnumKeys(AccountRoles).map((key, index) => (
                <option key={index} value={AccountRoles[key]}>
                  {key}
                </option>
              ))}
            </select>
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
