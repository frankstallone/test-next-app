'use server';

import { signOut } from '@/db/auth';

export default async function resendLogout() {
  await signOut();
}
