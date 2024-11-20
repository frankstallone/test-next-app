'use server';

import { signOut } from '@/db/auth';
import { redirect } from 'next/navigation';

export default async function appSignOut() {
  await signOut();
}

export const handleSignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    console.error('Failed to sign out', error);
  }

  redirect('/');
};
