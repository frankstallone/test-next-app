import appSignIn from '@/actions/signin';

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await appSignIn(formData);
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
