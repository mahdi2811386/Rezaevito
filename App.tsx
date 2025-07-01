import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import type { User, UserRole } from './types';

// --- Page & Component Imports ---
import AuthPage from '@/pages/AuthPage';
import Footer from './components/Footer';

// --- Customer Component Imports ---
import CustomerHeader from './components/Header';
import CustomerSidebar from './components/Sidebar';
import CustomerRouter from './routes/CustomerRouter';

// --- Business Component Imports ---
import BusinessHeader from './components/business/BusinessHeader';
import BusinessSidebar from './components/business/BusinessSidebar';
import BusinessRouter from './routes/BusinessRouter';

// --- Admin Component Imports ---
import AdminHeader from './components/admin/AdminHeader';
import AdminSidebar from './components/admin/AdminSidebar';
import AdminRouter from './routes/AdminRouter';

// --- Main App Component ---
const App: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('customer');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    
    // Check for a pending booking after login
    const pendingBooking = localStorage.getItem('pendingBooking');
    if (pendingBooking && loggedInUser.roles.includes('customer')) {
      setActiveRole('customer');
      // Redirect to invoice page for the pending booking
      window.location.hash = '#/invoice/new';
      return;
    }

    if (loggedInUser.roles.includes('admin')) {
        setActiveRole('admin');
        window.location.hash = '#/admin/dashboard';
    } else if (loggedInUser.roles.includes('business')) {
        setActiveRole('business');
        window.location.hash = '#/business/dashboard';
    } else if (loggedInUser.roles.includes('customer')) {
        setActiveRole('customer');
        window.location.hash = '#/';
    }
  };

  const handleLogout = () => {
    setUser(null);
    setSidebarOpen(false);
    setActiveRole('customer');
    window.location.hash = '/';
  };

  const handleToggleRole = () => {
    const newRole = activeRole === 'customer' ? 'business' : 'customer';
    setActiveRole(newRole);
    setSidebarOpen(false); 
    window.location.hash = newRole === 'business' ? '#/business/dashboard' : '#/';
  };
  
  useEffect(() => {
    const handleHashChange = () => {
        const hash = window.location.hash.replace('#', '');
        // Allow unauthenticated users to access booking pages
        if (!user && !hash.startsWith('/booking/') && hash !== '/') {
            // If not logged in and not on booking or home, redirect to home
             if (hash !== '' && !routes[hash]) {
                window.location.hash = '/';
             }
        }
    };
    window.addEventListener('hashchange', handleHashChange, false);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [user]);

  const routes: { [key: string]: boolean } = {
    '/': true,
    '/profile': true,
    '/bookings': true,
    '/loyalty': true,
    '/discounts': true,
    '/magazine': true,
    '/invite': true,
    '/about': true,
    '/terms': true,
    '/faq': true,
    '/login': true,
  };


  if (!user && !window.location.hash.startsWith('#/booking/')) {
    const currentHash = window.location.hash.replace('#', '');
    if (routes[currentHash]) {
       return <AuthPage onLogin={handleLogin} />;
    }
  }
  
  const renderPanel = () => {
    switch(activeRole) {
        case 'admin':
            return (
                <>
                    <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
                    <AdminSidebar 
                        isOpen={isSidebarOpen} 
                        onClose={() => setSidebarOpen(false)}
                        permissions={user.permissions!}
                        onLogout={handleLogout}
                    />
                    <main className="flex-grow px-4 md:px-8 lg:px-16 pt-24 pb-12">
                       <AdminRouter permissions={user.permissions!} />
                    </main>
                </>
            );
        case 'business':
            return (
                <>
                    <BusinessHeader 
                        onMenuClick={() => setSidebarOpen(true)}
                        onToggleRole={handleToggleRole}
                    />
                    <BusinessSidebar
                        isOpen={isSidebarOpen} 
                        onClose={() => setSidebarOpen(false)}
                        onLogout={handleLogout}
                    />
                    <main className="flex-grow px-4 md:px-8 lg:px-16 pt-24 pb-12">
                       <BusinessRouter />
                    </main>
                    <Footer />
                </>
            );
        case 'customer':
        default:
             return (
                <>
                    <CustomerHeader 
                        onMenuClick={() => setSidebarOpen(true)}
                        showToggleRole={user ? user.roles.includes('business') : false}
                        onToggleRole={handleToggleRole}
                        isLoggedIn={!!user}
                    />
                    <CustomerSidebar 
                        isOpen={isSidebarOpen} 
                        onClose={() => setSidebarOpen(false)}
                        onLogout={handleLogout}
                    />
                    <main className="flex-grow px-4 md:px-8 lg:px-16 pt-24 pb-12">
                       <CustomerRouter user={user} />
                    </main>
                    <Footer />
                </>
            );
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        {renderPanel()}
    </div>
  );
}

export default App;