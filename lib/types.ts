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
