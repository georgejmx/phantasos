import { ObjectId } from "mongodb";

export interface ApiResponse {
    ok: boolean;
    message: string;
}

/* Props */

export interface GlobalErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export interface MenuProps {
    email: string | null;
    dream: Dream | null;
    archetypes: Archetype[] | null;
}

export interface NavigationPaneProps {
    dream: Dream | null;
    archetypes: Archetype[];
}

export interface RediscoverModalProps {
    dream: Dream | null;
    onCancel: () => void;
}

export interface RecordModalProps {
    archetypes: Archetype[];
    onCancel: () => void;
    onConfirm: () => void;
}

export interface SelectArchetypeGridProps {
    archetypes: Archetype[];
    onSelect: (name: string) => void;
}

export interface TextInputProps {
    label: string;
    onUpdate: (value: string) => void;
    isMasked: boolean;
}

export interface DreamProps {
    text: string;
    date: string;
    goal?: string;
    aspect?: Aspect;
}

/* Entities */

export type User = {
    _id?: ObjectId;
    email: string;
    hash: string;
};

export type CoreDream = {
    dreamtext: string;
    archetype: string;
};

export type RawDream = {
    _id?: ObjectId;
    text: string;
    archetype: string;
    userEmail: string;
    date: Date;
};

export type Aspect = "ego" | "self" | "soul";

export type Dream = {
    id: string;
    userEmail: string;
    dreamtext: string;
    archetype: string;
    date: string;
    goal: string;
    aspect: Aspect;
};

export type Archetype = {
    name: string;
    goal: string;
    aspect: Aspect;
    description: string;
};
