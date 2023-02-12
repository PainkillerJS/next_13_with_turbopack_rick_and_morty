'use client';

import { FC, useEffect } from 'react';

const ErrorCharacter: FC = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorCharacter;
