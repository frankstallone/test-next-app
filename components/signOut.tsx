import { handleSignOut } from '@/actions/signout';

export default function SignOut() {
  return (
    <form action={handleSignOut}>
      <button type="submit">Sign out</button>
    </form>
  );
}
