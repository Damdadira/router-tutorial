import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function About() {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true';

  return (
    <div>
      <h1>About</h1>
      <p>About 페이지입니다.</p>
      {/* 출력하려면 /about?detail=true로 접속해야함 */}
      {detail && <p>추가적인 정보가...</p>}
    </div>
  );
}
