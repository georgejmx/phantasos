import { ObjectId } from "mongodb";

/* Props */

export interface MenuProps {
  email: string | null | undefined;
  dream: Dream | null;
  archetypes: Archetype[] | null;
}

export interface NavigationPaneProps {
  dream: Dream;
  archetypes: Archetype[];
}

export interface RediscoverModalProps {
  dream: Dream;
  onCancel: () => void;
}

export interface RecordModalProps {
  archetypes: Archetype[];
  onCancel: () => void;
  onConfirm: () => void;
}

export interface SelectArchetypeGridProps {
  archetypes: Archetype[];
  onSelect: (id: number) => void;
}

export type DreamProps = {
  text: string;
  date: string;
  goal?: string;
  aspect?: string;
};

/* Entities */

export type User = {
  _id?: ObjectId;
  email: string;
  hash: string;
};

export type Dream = {
  id: number;
  dreamtext: string;
  date: string;
  archetypeId?: number;
  goal?: string;
  aspect?: string;
};

export type Archetype = {
  id: number;
  name: string;
  goal: string;
  aspect: string;
  description: string;
};
