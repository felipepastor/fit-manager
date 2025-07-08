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
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;

    // Personal Information
    nickname: string;
    birthday: string;
    cellphone: string;
    job: string;

    // Physical Measurements
    height: number;
    weight: number;
    body_fat: number;

    // Goals and Objectives
    objective: string;
    goals: string;

    // Lifestyle
    life_style: 'sedentary' | 'normal' | 'active' | 'very_active';
    dedication: 'yes' | 'no';
    active: 'yes' | 'no';
    smoke: 'yes' | 'no' | 'sometimes';
    drink: 'never' | 'rarely' | 'sometimes' | 'often';
    drink_frequency: number;
    consultancy_before: 'yes' | 'no';

    // Training Information
    training_frequency: number;
    training_content: 'bodybuilding' | 'cardio' | 'functional' | 'crossfit' | 'pilates';
    training_history: string;
    like_training: 'yes' | 'no' | 'sometimes';
    favorite_training: string;
    training_days_week: string[];
    training_affinity: number;
    training_description: string;
    training_extra_exercise: string;
    training_extra_effort: number;
    training_extra_frequency_days: string[];

    // Running Information
    running_practice: string;
    running_frequency: number;
    running_frequency_days: string[];
    running_affinity: number;
    running_description: string;

    // Diet and Health
    do_diet: 'yes' | 'no' | 'sometimes';
    diet_description: string;
    orthopedic_issues?: string;
    training_specificity?: string;
    sleeping_hours: number;
    tired_when_wake: 'yes' | 'no' | 'sometimes';

    // Additional Information
    observations?: string;

    // Standard User Fields
    password?: string;
    remember_token?: string;
}
