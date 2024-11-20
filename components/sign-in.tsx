import resendLogin from '@/actions/resend-login';

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await resendLogin(formData);
      }}
    >
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
