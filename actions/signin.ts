'use server';

import { signIn } from '@/db/auth';

export default async function appSignIn(formData: FormData) {
  await signIn('resend', formData);
}
