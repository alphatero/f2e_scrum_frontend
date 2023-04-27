export type TaskTypes = {
  id: string | number;
  content: string;
  priority: number | string;
  seq?: number;
  title?: string;
  point?: number;
};

export interface DragLayoutProps {
  info: DragInfoProps;
  speechTexts: {
    ready: string;
    success?: string;
    error: string;
  };
}

export interface DragInfoProps {
  button: string;
  next: string;
  prev: string;
  tasks: TaskTypes[];
  type: string;
  title?: string;
}