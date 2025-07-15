import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Student {
    id: string; // Changed to string (UUID)
    name: string;
    email: string;
    access_token: string | null; // New field (UUID)
    answered_at: string | null; // New field (timestamp)
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;

    // Personal Information (all nullable except name and email)
    nickname: string | null;
    birthday: string | null;
    cellphone: string | null;
    job: string | null;

    // Physical Measurements (all nullable)
    height: number | null;
    weight: number | null;
    body_fat: number | null;

    // Goals and Objectives (all nullable)
    objective: string | null;
    goals: string | null;

    // Lifestyle (all nullable)
    life_style: 'sedentary' | 'normal' | 'active' | 'very_active' | null;
    dedication: boolean | null; // Changed from enum to boolean
    active: boolean | null; // Changed from enum to boolean
    smoke: 'yes' | 'no' | 'sometimes' | null;
    drink: 'never' | 'rarely' | 'sometimes' | 'often' | null;
    drink_frequency: number | null;
    consultancy_before: boolean | null; // Changed from enum to boolean

    // Training Information (all nullable)
    training_frequency: number | null;
    training_content: 'bodybuilding' | 'cardio' | 'functional' | 'crossfit' | 'pilates' | null;
    training_history: string | null;
    like_training: 'yes' | 'no' | 'sometimes' | null;
    favorite_training: string | null;
    training_days_week: string[] | null;
    training_affinity: number | null;
    training_description: string | null;
    training_extra_exercise: string | null;
    training_extra_effort: number | null;
    training_extra_frequency_days: string[] | null;

    // Running Information (all nullable)
    running_practice: string | null;
    running_frequency: number | null;
    running_frequency_days: string[] | null;
    running_affinity: number | null;
    running_description: string | null;

    // Diet and Health (all nullable)
    do_diet: 'yes' | 'no' | 'sometimes' | null;
    diet_description: string | null;
    orthopedic_issues: string | null;
    training_specificity: string | null;
    sleeping_hours: number | null;
    tired_when_wake: 'yes' | 'no' | 'sometimes' | null;

    // Additional Information (all nullable)
    observations: string | null;
}

// Inertia response types
export interface InertiaStudentResponse {
    props: {
        student?: Student;
        success?: string;
        [key: string]: unknown;
    };
}
