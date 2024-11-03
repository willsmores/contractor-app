import "./page.scss";
import SignInButton from '../components/SignInButton';

export default function Home() {
  return (
    <div>
      <main className="main">
        <h1>Visitor Sign-in App</h1>
        <SignInButton />
      </main>
    </div>
  );
}