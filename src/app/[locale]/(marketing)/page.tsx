import { redirect } from 'next/navigation';

// Redirect all marketing home requests to static landing page
export default function LandingPage() {
  redirect('/index.html');
}
