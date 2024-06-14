'use client';

import { useStore } from '@/store';
import { useRouter } from 'next/navigation';

export default function NavigateFirstPage() {
  const router = useRouter();
  const userRole = useStore((state) => state.userRole);

  if (userRole === 'ADMIN') {
    router.replace('/admin/manage');
  } else {
    router.replace('/');
  }

  return null;
}
