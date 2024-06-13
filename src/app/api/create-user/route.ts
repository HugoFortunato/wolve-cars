import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { userId, name } = await request.json();

    const result = { userId, name };

    await axios.post('http://localhost:3004/users', result, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
