import styles from './SignInButton.module.scss';
import Link from "next/link";

export default function SignInButton() {
  return (
    <Link href={'/information/'}>
      <button className={styles.SignInButton}>SIGN IN</button>
    </Link>
  );
}