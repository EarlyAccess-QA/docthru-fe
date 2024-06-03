'use client';

import Image from 'next/image';
import { memo, useState } from 'react';
import defaultMemberImg from '../../../public/icons/member.png';
import CommentDropDown from './CommentDropDown';

interface Props {
  userPhoto?: string;
  username: string;
  writtenDate: string;
  commentContent: string;
}

const Comment = memo(({ userPhoto, username, writtenDate, commentContent }: Props) => {
  const [isModifying, setModifying] = useState<boolean>(false);

  return (
    <div className="relative flex min-h-113 w-826 flex-col gap-12 rounded-sm bg-gray-5 p-16">
      <div className="flex w-full items-start">
        <div className="flex flex-1 items-center gap-8">
          <Image src={userPhoto ? userPhoto : defaultMemberImg} alt="유저 프로필 사진" width={32} height={32} />
          <div className="flex flex-col items-start gap-4">
            <p className="text-14 font-medium text-gray-8">{username}</p>
            <p className="text-12 font-medium text-gray-4">{writtenDate}</p>
          </div>
        </div>
        <CommentDropDown setModifying={setModifying} />
      </div>
      {isModifying ? (
        <textarea name="commentTextarea" id="commnetTextarea" className="">
          {commentContent}
        </textarea>
      ) : (
        <div>{commentContent}</div>
      )}
    </div>
  );
});

export default Comment;
