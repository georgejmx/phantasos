export interface RediscoverModalProps {
  onCancel: () => void;
}

export interface RecordModalProps extends RediscoverModalProps {
  onConfirm: () => void;
}

export interface SelectArchetypeGridProps {
  archetypes: Archetype[];
  onSelect: (id: number) => void;
}

export type DreamProps = {
  text: string;
  date: string;
  archetypeId: number;
};

export type Dream = {
  id: number;
  dreamtext: string;
  date: string;
  archetypeId: number;
};

export type Archetype = {
  id: number;
  name: string;
  goal: string;
  aspect: string;
  description: string;
};
