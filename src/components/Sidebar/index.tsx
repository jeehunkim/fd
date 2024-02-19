'use client';
import React from 'react';
import Image from 'next/image';
import logo from '/public/svgs/next.svg';

import {
  LayoutDashboard,
  BadgeDollarSign,
  WalletCards,
  CircleUserRound,
  Settings,
  HelpingHand,
  LucideIcon,
  Upload,
  ListVideo,
  UserX,
  User,
} from 'lucide-react';
import SidebarItem from './item';

interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    path: '/',
  },
  // {
  //   name: 'Upload',
  //   icon: Upload,
  //   path: '/upload',
  // },

  {
    name: 'Upload',
    icon: Upload,
    path: '/upload2',
  },
  {
    name: 'VideoList',
    icon: ListVideo,
    path: '/videolist',
  },
  {
    name: 'Withdrawal',
    icon: UserX,
    path: '/withdrawal',
  },
  {
    name: 'SignUp',
    icon: User,
    path: '/user/signup',
  },

  // {
  //   name: 'Transaction',
  //   icon: BadgeDollarSign,
  //   path: '/transaction',
  // },
  // {
  //   name: 'Payment',
  //   icon: WalletCards,
  //   path: '/payment',
  // },
  // {
  //   name: 'Accounts',
  //   icon: CircleUserRound,
  //   path: '/accounts',
  // },
  // {
  //   name: 'Settings',
  //   icon: Settings,
  //   path: '/settings',
  //   items: [
  //     {
  //       name: 'General',
  //       path: '/settings',
  //     },
  //     {
  //       name: 'Security',
  //       path: '/settings/security',
  //     },
  //     {
  //       name: 'Notifications',
  //       path: '/settings/notifications',
  //     },
  //   ],
  // },
  // {
  //   name: 'Help',
  //   icon: HelpingHand,
  //   path: '/help',
  //   items: [
  //     {
  //       name: 'FAQs',
  //       path: '/help/faqs',
  //     },
  //     {
  //       name: 'Support',
  //       path: '/help/support',
  //     },
  //     {
  //       name: 'Contact-US',
  //       path: '/help/contact-us',
  //     },
  //   ],
  // },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <Image className="h-20 w-fit" src={logo} width={0} alt="logo" />
        <div className="flex flex-col space-y-1">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
