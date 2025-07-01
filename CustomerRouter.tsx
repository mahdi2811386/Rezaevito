import React, { useState, useEffect } from 'react';
import type { User } from '@/types';

// Import all customer-facing pages
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import BookingsPage from '@/pages/BookingsPage';
import LoyaltyPage from '@/pages/LoyaltyPage';
import DiscountsPage from '@/pages/DiscountsPage';
import MagazinePage from './MagazinePage';
import InvitePage from '@/pages/InvitePage';
import AboutPage from '@/pages/AboutPage';
import TermsPage from '@/pages/TermsPage';
import FaqPage from '@/pages/FaqPage';
import AuthPage from '@/pages/AuthPage'; // Can be rendered via router if needed
import BookingPage from '@/pages/BookingPage';
import InvoicePage from '@/pages/InvoicePage';

// Static routes
const staticRoutes: { [key: string]: React.ComponentType<any> } = {
    '/': HomePage,
    '/profile': ProfilePage,
    '/bookings': BookingsPage,
    '/loyalty': LoyaltyPage,
    '/discounts': DiscountsPage,
    '/magazine': MagazinePage,
    '/invite': InvitePage,
    '/about': AboutPage,
    '/terms': TermsPage,
    '/faq': FaqPage,
};

interface CustomerRouterProps {
    user: User | null;
}

const CustomerRouter: React.FC<CustomerRouterProps> = ({ user }) => {
    const [path, setPath] = useState(window.location.hash.replace('#', ''));

    useEffect(() => {
        const handleHashChange = () => {
            setPath(window.location.hash.replace('#', ''));
        };

        window.addEventListener('hashchange', handleHashChange);
        
        // Initial route handling
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = () => {
        // Handle dynamic booking route
        const bookingMatch = path.match(/^\/booking\/(\w+)/);
        if (bookingMatch) {
            const serviceId = bookingMatch[1];
            return <BookingPage serviceId={serviceId} user={user} />;
        }

        // Handle dynamic invoice route
        const invoiceMatch = path.match(/^\/invoice\/(\w+)/);
        if (invoiceMatch) {
            const bookingId = invoiceMatch[1];
            return <InvoicePage bookingId={bookingId} user={user} />;
        }

        // Handle static routes
        const PageComponent = staticRoutes[path] || HomePage;
        
        if (!user && path !== '/') {
            // Allow unauthenticated access only to home and booking pages (handled above)
            if (staticRoutes[path] && path !== '/') {
                window.location.hash = '/';
                return <HomePage />;
            }
        }
        
        return <PageComponent user={user} />;
    };

    return renderPage();
};

export default CustomerRouter;