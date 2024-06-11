import { useChallenges } from '@/hooks/useChallenges';
import { useState } from 'react';

const Pagination = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, fetchPreviousPage, isFetchingPreviousPage } =
    useChallenges();

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="mt-4 flex items-center justify-center space-x-2">
      <button
        onClick={() => fetchPreviousPage()}
        disabled={currentPage === 1 || isFetchingPreviousPage}
        className="disabled:text-gray-400 text-gray-500"
      >
        &lt;
      </button>
      {Array.from({ length: currentPage }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => fetchNextPage()}
          className={`${currentPage === i + 1 ? 'bg-gray-800 text-yellow-400' : 'text-gray-500'} rounded-md px-2 py-1`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="disabled:text-gray-400 text-gray-500"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
