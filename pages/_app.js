// pages/_app.js
import { UserProvider } from '@/app/Context/UserContext';
import '../app/globals.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
