import NextAuth from 'next-auth';
import { accounts, db, sessions, users, verificationTokens } from './schema';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import Resend from 'next-auth/providers/resend';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: accounts,
    verificationTokensTable: verificationTokens,
    usersTable: users,
    sessionsTable: sessions,
  }),
  secret: process.env.AUTH_SECRET,
  providers: [
    Resend({
      from: 'onboarding@resend.dev',
    }),
  ],
});
