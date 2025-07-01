import React, { useState, useEffect } from 'react';
import type { AdminPermissions } from '@/types';

// Import all admin pages
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import AdminUsersPage from '@/pages/admin/AdminUsersPage';
import AdminFinancePage from '@/pages/admin/AdminFinancePage';
import AdminVerificationPage from '@/pages/admin/AdminVerificationPage';
import AdminSupportPage from '@/pages/admin/AdminSupportPage';
import AdminNewsPage from '@/pages/admin/AdminNewsPage';
import AdminAdvertisingPage from '@/pages/admin/AdminAdvertisingPage';
import AdminSettingsPage from '@/pages/admin/AdminSettingsPage';
import AdminLogsPage from '@/pages/admin/AdminLogsPage';

const routes: { [key: string]: React.ComponentType<{permissions: AdminPermissions}> } = {
    '/admin/dashboard': AdminDashboardPage,
    '/admin/users': AdminUsersPage,
    '/admin/finance': AdminFinancePage,
    '/admin/verification': AdminVerificationPage,
    '/admin/support': AdminSupportPage,
    '/admin/news': AdminNewsPage,
    '/admin/advertising': AdminAdvertisingPage,
    '/admin/settings': AdminSettingsPage,
    '/admin/logs': AdminLogsPage,
};

interface AdminRouterProps {
    permissions: AdminPermissions;
}

const AdminRouter: React.FC<AdminRouterProps> = ({ permissions }) => {
    const [currentPage, setCurrentPage] = useState(window.location.hash.replace('#', '') || '/admin/dashboard');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPage(window.location.hash.replace('#', '') || '/admin/dashboard');
        };

        window.addEventListener('hashchange', handleHashChange);
        
        if (!window.location.hash || !routes[window.location.hash.replace('#', '')]) {
            window.location.hash = '/admin/dashboard';
        }

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const PageComponent = routes[currentPage] || AdminDashboardPage;

    return <PageComponent permissions={permissions} />;
};

export default AdminRouter;