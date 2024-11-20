import SignIn from '@/components/sign-in';
import { SignOut } from '@/components/sign-out';
import { auth } from '@/db/auth';

export default function Home() {
  const session = auth();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {!session ? <SignIn /> : <h1>Welcome back!</h1>}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Super awesome test app <SignOut />
      </footer>
    </div>
  );
}
