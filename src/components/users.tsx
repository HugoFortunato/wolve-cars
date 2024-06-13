'use client';

import { use } from 'react';

export async function getUsers() {
  const response = await fetch('http://localhost:3004/users', {
    method: 'GET',
    cache: 'no-store',
    redirect: 'follow',
  });

  const data = await response.json();

  return data;
}

//comment

export function Users() {
  const currentUsers = use(getUsers());

  return (
    <>
      {currentUsers.map((user: any) => (
        <div key={user.userId}>
          <p>{user.userId}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </>
  );
}
