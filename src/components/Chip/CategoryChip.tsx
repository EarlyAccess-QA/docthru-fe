import '@/styles/tailwind.css';
import { PropsWithChildren, memo } from 'react';

const CategoryChip = memo(({ children }: PropsWithChildren) => {
  return (
    <p
      className={
        'inline-flex items-center justify-center rounded-xs border-1 border-solid border-gray-3 bg-white px-7 py-5 text-13 font-medium text-gray-6'
      }
    >
      {children}
    </p>
  );
});

export default CategoryChip;
