export interface RediscoverModalProps {
  onCancel: () => void;
}

export interface RecordModalProps extends RediscoverModalProps {
  onConfirm: () => void;
}

export type DreamInput = {
  text: string;
  date: string;
};

export type Dream = {
  id: string;
  dreamtext: string;
  date: string;
};
