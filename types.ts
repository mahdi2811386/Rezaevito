export interface Service {
  id: number;
  name: string;
  category: string;
  rating: number;
  price: string;
  imageUrl: string;
}

export interface SpecialOffer extends Service {
  discount: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  avatarUrl: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

// --- New Booking Page Types ---
export interface BookableService {
  id: number;
  name: string;
  price: number;
  duration: number; // in minutes
}
export interface TimeSlot {
  time: string;
  available: boolean;
}
export interface Amenity {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
}
export interface BookingDetails {
    serviceId: string;
    businessName: string;
    businessImage: string;
    date: string;
    time: string;
    selectedServices: BookableService[];
    totalPrice: number;
}


// --- Business Panel Types ---

export interface BusinessStats {
  todayRevenue: number;
  todayBookings: number;
}

export interface BookingRequest {
  id: number;
  customerName: string;
  time: string;
  service: string;
  phone: string;
}

export interface SubscriptionPlan {
    name: string;
    commission: number;
    features: string[];
    isCurrent: boolean;
    isRecommended?: boolean;
}

export interface BusinessReview {
    id: number;
    customerName: string;
    comment: string;
    rating: number;
    status: 'pending' | 'approved' | 'rejected';
}

// --- Auth & Admin Types ---
export type UserRole = 'customer' | 'business' | 'admin';

export interface AdminPermissions {
    canViewDashboard: boolean;
    canManageUsers: boolean;
    canManageFinance: boolean;
    canManageVerification: boolean;
    canManageSupport: boolean;
    canManageNews: boolean;
    canManageAdvertising: boolean;
    canManageSystemSettings: boolean;
    canViewLogs: boolean;
}

export interface User {
    id: number;
    name: string;
    phone: string;
    roles: UserRole[];
    permissions?: AdminPermissions; // Only for admins
}