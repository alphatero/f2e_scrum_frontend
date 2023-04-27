export interface CoverLayoutProps {
  info: { 
    button: string;
    next: string;
  } & CoverInfoProps;
  pageSetting: {
    sZIndex: string;
    animate: {
      letter: {
        y?: number[];
        rotateZ?: number[];
      };
      letterC: {
        initial: {
          transition: {
            delayChildren: number;
          };
          transform: string;
        };
        in: {
          transform: string[];
        };
      };
      marker: {
        rotateZ?: number;
        y?: number[];
      };
    };
    transition: {
      letterC: {
        type: string;
        ease: string;
        duration: number;
      };
      marker: {
        delay: number;
        duration: number;
      };
    };
    markerIcon: JSX.Element;
    };
}

export type BubbleTypes = {
  id: string;
  content: string | (string | JSX.Element)[];
  priority?: number;
  delay?: number;
  class?: string;
}

export interface CoverInfoProps {
  bubble: BubbleTypes[];
  button: string;
  bottomText?: string;
}