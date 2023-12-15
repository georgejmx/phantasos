import { ObjectId } from "mongodb";

/* Props */

export interface MenuProps {
  email: string | null | undefined;
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

export type CoreDream = {
  dreamtext: string;
  archetype: string;
};

export type RawDream = CoreDream & {
  _id?: ObjectId;
  userEmail: string;
  date: Date;
};

export type Dream = {
  id: string;
  userEmail: string;
  dreamtext: string;
  archetype: string;
  date: string;
  goal: string;
  aspect: string;
};

export type Archetype = {
  _id: ObjectId;
  name: string;
  goal: string;
  aspect: string;
};
