'use server';

import { signIn } from '@/db/auth';

export default async function resendLogin(formData: FormData) {
  await signIn('resend', formData);
}
