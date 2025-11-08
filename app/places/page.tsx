import { redirect } from 'next/navigation';

export default function PlacesPage() {
  // Redirect to main page since places should only be accessed through destinations
  redirect('/');
}