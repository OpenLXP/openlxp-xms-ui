'use strict';

import {
  useLocation,
} from "react-router-dom";

import Link from 'next/link';
import { useRouter } from 'next/router';

const App = () => {
  // Conditionally renders either the main website or the dashboard without
  // the header or footer.
  const router = useRouter();

  const loadContent = () => {
    const location = useLocation();

    const dashboard = () => (
      router.push("/DashboardPage")
    );

    const mainContent = () => router.push("/mainPage");

    return location.pathname.includes("dashboard")
      ? dashboard()
      : mainContent();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Link href={'/'} passHref component={loadContent} />
    </div>
  );
};

export default App;
