
import SignInButton from "@/components/SignInButton"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Connected to Server!</h1>
        <Link href={'/information/'}>Sign In Here
          <SignInButton />
        </Link>
      </main>
    </div>
  );
}