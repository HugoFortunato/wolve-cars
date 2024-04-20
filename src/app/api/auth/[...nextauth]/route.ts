import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: '8cf6f1fb299268fa5f63',
      clientSecret: 'edf7eda27f5126ae165156824469f5f173cd0c46',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
