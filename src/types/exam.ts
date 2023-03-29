export type TaskTypes = {
  id: string | number;
  content: string;
  priority: number | string;
  seq: number;
  title?: string;
  point?: number;
};

export interface DragLayoutProps {
  info: {
    tasks: TaskTypes[];
    button: string;
    type: string;
    next: string;
  };
  speechTexts: {
    ready: string;
    success?: string;
    error: string;
  };
}