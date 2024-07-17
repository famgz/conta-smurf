'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useURLHash() {
  const [hash, setHash] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname, searchParams]);

  return hash;
}
