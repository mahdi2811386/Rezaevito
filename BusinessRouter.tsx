import React, { useState, useEffect } from 'react';

// Import all business pages
import DashboardPage from '@/pages/business/DashboardPage';
import SettingsPage from '@/pages/business/SettingsPage';
import AssistantPage from '@/pages/business/AssistantPage';
import FinancePage from '@/pages/business/FinancePage';
import BookingsPage from '@/pages/business/BookingsPage';
import DiscountsPage from '@/pages/business/DiscountsPage';
import SubscriptionPage from '@/pages/business/SubscriptionPage';
import AdvertisingPage from '@/pages/business/AdvertisingPage';
import ReviewsPage from '@/pages/business/ReviewsPage';
import VerificationPage from '@/pages/business/VerificationPage';
import SupportPage from '@/pages/business/SupportPage';

const routes: { [key: string]: React.ComponentType } = {
    '/business/dashboard': DashboardPage,
    '/business/settings': SettingsPage,
    '/business/assistant': AssistantPage,
    '/business/finance': FinancePage,
    '/business/bookings': BookingsPage,
    '/business/discounts': DiscountsPage,
    '/business/subscription': SubscriptionPage,
    '/business/advertising': AdvertisingPage,
    '/business/reviews': ReviewsPage,
    '/business/verification': VerificationPage,
    '/business/support': SupportPage,
};

const BusinessRouter: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(window.location.hash.replace('#', '') || '/business/dashboard');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPage(window.location.hash.replace('#', ''));
        };

        window.addEventListener('hashchange', handleHashChange);
        
        // Initial check in case the user lands directly on a page
        if (!window.location.hash || !routes[window.location.hash.replace('#', '')]) {
            window.location.hash = '/business/dashboard';
        }


        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const PageComponent = routes[currentPage] || DashboardPage;

    return <PageComponent />;
};

export default BusinessRouter;