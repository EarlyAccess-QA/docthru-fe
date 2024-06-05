'use client';

import Image from 'next/image';
import { ChangeEvent, memo, useState } from 'react';
import defaultMemberImg from '../../../public/icons/member.png';
import CommentDropDown from './CommentDropDown';

interface Props {
  userPhoto?: string;
  username: string;
  writtenDate: string;
  commentContent: string;
}

const Comment = memo(({ userPhoto, username, writtenDate, commentContent }: Props) => {
  const [isModifying, setIsModifying] = useState<boolean>(false);
  const [content, setContent] = useState<string>(commentContent);
  const [tempContent, setTempContent] = useState<string>(content);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTempContent(e.target.value);
  };

  return (
    <div
      className={`relative flex min-h-98 w-826 flex-col gap-12 rounded-sm p-16 ${isModifying ? 'bg-white' : 'bg-gray-0'}`}
    >
      <div className="flex w-full items-start">
        <div className="flex flex-1 items-center gap-8">
          <Image src={userPhoto ? userPhoto : defaultMemberImg} alt="유저 프로필 사진" width={32} height={32} />
          <div className="flex flex-col items-start gap-4">
            <p className="text-14 font-medium text-gray-8">{username}</p>
            <p className="text-12 font-medium text-gray-4">{writtenDate}</p>
          </div>
        </div>
        <CommentDropDown
          setIsModifying={setIsModifying}
          isModifying={isModifying}
          content={content}
          setContent={setContent}
          tempContent={tempContent}
          setTempContent={setTempContent}
        />
      </div>
      {isModifying ? (
        <textarea
          name="commentTextarea"
          id="commentTextarea"
          className="h-60 w-full resize-none overflow-y-scroll text-16 leading-tight text-gray-7 outline-0 focus:ring-0"
          value={tempContent}
          onChange={handleTextareaChange}
        />
      ) : (
        <div className="max-h-57 w-full overflow-y-scroll bg-transparent text-16 leading-tight text-gray-7 outline-0">
          {content}
        </div>
      )}
    </div>
  );
});

export default Comment;
