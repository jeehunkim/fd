'use client';
import React, { FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import Alert from '@/components/Alert/Alert';
import Alert from '@/components/Alert/Alert_';
import _ from 'lodash';
import { getEnumKeys } from '@/utils/common';

import {
  Category,
  CategorySub,
  objCategorySub,
  RecordType,
  checkCategorySubCode,
} from '@/types/uploadVideo';

export interface Item {
  key: string;
  value: string;
}

const Upload = () => {
  const router = useRouter();
  const [onAlert, setOnAlert] = useState(false);
  const [kindOf, setKindOf] = useState('success');
  const [kindOfString, setKindOfString] = useState('업로드가 완료 되었습니다');
  const [category, setCategory] = useState<Category>(Category.SPORTS);
  const [subCategory, setSubCategory] = useState<Item[]>();
  const [content, setContent] = useState();
  const [categorySubCode, setCategorySubCode] = useState<string>('GOLF');

  const onChangeHanlder = (e: any) => {
    const selectedCategory = e.currentTarget.value;
    setContent(selectedCategory);

    const getCategorySubCode = _.values(
      _.find(checkCategorySubCode, selectedCategory),
    )[0];

    setCategorySubCode(getCategorySubCode);
  };

  const defaultCategorySub = objCategorySub['SPORTS'];
  const objDefaultCategorySub = _.map(defaultCategorySub, (item) => {
    return {
      value: item,
      key: item,
    };
  });
  let Options = objDefaultCategorySub;

  useEffect(() => {
    setSubCategory(objDefaultCategorySub);
  }, []);

  const alertFalse = () => {
    setOnAlert(false);
  };

  const onCategoryChange = async (e: any) => {
    const category = Category[e.target.value as keyof typeof Category];
    setCategory(category);

    const getSubCategory = objCategorySub[category];
    const objDefaultCategorySub = _.map(getSubCategory, (item) => {
      return {
        value: item,
        key: item,
      };
    });
    Options = objDefaultCategorySub;
    setSubCategory(objDefaultCategorySub);

    if (_.first(objDefaultCategorySub)) {
      const subCode = _.values(
        _.find(checkCategorySubCode, _.first(objDefaultCategorySub).value),
      )[0];
      setCategorySubCode(subCode);
    }
  };
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch('./api/upload', {
      method: 'POST',
      body: formData,
      headers: {
        userid: 'mwc',
      },
    });

    if (response?.status === 200) {
      //   window.alert('업로드 되었습니다.');
      document.getElementById('fileUploadform').reset();
      setKindOf('success');
      setKindOfString('업로드가 완료 되었습니다');
      setOnAlert(true);
    } else {
      setKindOf('failed');
      setKindOfString('업로드 실패');
      setOnAlert(true);
    }
  }

  return (
    <div className="flex flex-col justify-center min-h-screen overflow-hidden max-w-sm mx-auto">
      {/* <form onSubmit={onSubmit} id="fileUploadform">
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@4dist.com"
              value="support@4dreplay.com"
              name="email"
              readOnly
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="base-input"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            SubTitle
          </label>
          <input
            type="text"
            id="base-input"
            name="subTitle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <input
            type="text"
            id="base-input"
            name="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            OwnerName
          </label>
          <input
            type="text"
            id="base-input"
            name="ownerName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value="4DReplay"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            OwnerNickName
          </label>
          <input
            type="text"
            id="base-input"
            name="ownerNickName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value="4DReplay"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            OwnerChannelName
          </label>
          <input
            type="text"
            id="base-input"
            name="ownerChannelName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value="4DReplay"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            OwnerProfileIconUrl
          </label>
          <input
            type="text"
            id="base-input"
            name="ownerProfileIconUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value="https://kr-4d-4dist.oss-ap-northeast-2.aliyuncs.com/support@4dreplay.com/support@4dreplay.com_img_assist_profile.png"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            name="video"
          />
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            name="video"
          />
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            name="video"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          등록
        </button>
      </form> */}

      <form
        className="max-w-md mx-auto"
        onSubmit={onSubmit}
        id="fileUploadform"
      >
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="subTitle"
            id="subTitle"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            SubTitle
          </label>
        </div>

        <div className="relative z-0 w-full mb-3 group">
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a Description..."
            name="description"
          ></textarea>
        </div>

        <div className="relative z-0 w-full mb-3 group">
          <select
            id="category"
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={category}
            onChange={onCategoryChange}
          >
            {getEnumKeys(Category).map((key, index) => (
              <option key={index} value={Category[key]}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div className="relative z-0 w-full mb-3 group">
          <select
            id="categorySub"
            name="categorySub"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeHanlder}
            value={content}
          >
            {subCategory &&
              subCategory.map((item, index) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
          </select>
        </div>

        <div className="relative z-0 w-full mb-3 group">
          <select
            id="recordType"
            name="recordType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {getEnumKeys(RecordType).map((key, index) => (
              <option key={index} value={RecordType[key]}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div className="relative z-0 w-full mb-3 group">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            name="video"
          />
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            name="video"
          />
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            name="video"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <input type="hidden" name="email" value="support@4dreplay.com" />
        <input type="hidden" name="ownerName" value="4DReplay" />
        <input type="hidden" name="ownerNickName" value="4DReplay" />
        <input type="hidden" name="ownerChannelName" value="4DReplay" />
        <input type="hidden" name="nodeId" value="0001001001" />
        <input type="hidden" name="categorySubCode" value={categorySubCode} />
        <input type="hidden" name="poseIndicatorList" value="" />
        <input
          type="hidden"
          name="ownerProfileIconUrl"
          value="https://kr-4d-4dist.oss-ap-northeast-2.aliyuncs.com/support@4dreplay.com/support@4dreplay.com_img_assist_profile.png"
        />
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
  );
};

export default Upload;
