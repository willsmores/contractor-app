import "./SignInButton.scss";
import Link from "next/link";

export default function SignInButton() {
  return (
    <button className="SignInButton">
      <Link href={'/information/'}>Sign In Here</Link>
    </button>
  );
}