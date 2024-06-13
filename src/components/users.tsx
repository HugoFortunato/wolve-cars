'use client';

import { use } from 'react';

export async function getUsers() {
  const response = await fetch('http://localhost:3000/api/get-users', {
    method: 'GET',
    cache: 'no-store',
    redirect: 'follow',
  });

  const data = await response.json();

  return data;
}

export function Users() {
  const currentUsers = use(getUsers());

  return (
    <>
      {currentUsers.data.map((user: any) => (
        <div key={user.userId}>
          <p>{user.userId}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </>
  );
}
