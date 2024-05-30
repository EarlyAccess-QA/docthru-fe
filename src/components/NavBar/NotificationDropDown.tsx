'use client';

import useDropDown from '@/hooks/useDropDown';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useStore } from '@/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useRef, useState } from 'react';
import notiImg from '../../../public/icons/noti.png';
import notiEmptyImg from '../../../public/icons/noti_empty.png';
import Notification from './Notification';

interface NotiData {
  id?: number;
  contents?: string;
  date?: string;
}

interface NotificationProps {
  data: NotiData[];
}
const NotificationDropDown = memo(({ data }: NotificationProps) => {
  const [ notificationImg, setNotificationImg ] = useState(notiEmptyImg);
  const { isOpen: isDropDownOpen, openDropDown, closeDropDown } = useDropDown();
  const { setLogout, previousNotification, setPreviousNotification } = useStore((state) => ({ 
    setLogout: state.setLogout,
    previousNotification: state.previousNotification,
    setPreviousNotification: state.setPreviousNotification,
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleContainerClick = () => {
    isDropDownOpen ? closeDropDown() : openDropDown();
  };

  const handleCloseDropDown = () => {
    setPreviousNotification(data.length);
    setNotificationImg(notiEmptyImg);
    closeDropDown();
  };

  useOnClickOutside(containerRef, handleCloseDropDown);

  useEffect(() => {
    if (data.length > previousNotification) {
        const checkNotification = setTimeout(() => {
          setNotificationImg(notiImg)
        }, 1000);

        return () => clearTimeout(checkNotification);
    }
  }, [data.length, previousNotification]);

  return (
    <div className="relative flex-shrink-0" ref={containerRef} onClick={handleContainerClick}>
      <div className="relative cursor-pointer">
        <Image
          src={notificationImg}
          alt="알림 아이콘"
          width={24}
          height={24}
        />
      </div>
      {isDropDownOpen && (
        <div
          className="absolute right-[-5px] top-40 flex h-467 w-343 flex-col gap-15 rounded-xs border-2 border-solid border-gray-2 bg-white py-16"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="flex w-full items-center px-16 text-16 font-semibold text-gray-8">알림</p>
          <div className="flex h-full w-full flex-shrink-0 flex-col gap-3 py-7">
            {data.map((notification) => {
              return <Notification key={notification.id} contents={notification.contents} date={notification.date} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
});

export default NotificationDropDown;
