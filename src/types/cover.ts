export interface CoverLayoutProps {
  info: {
    speechBubble: {
      id: number;
      content: string | (string | JSX.Element)[];
    }[];
    bottomText?: string;
    button: string;
    next: string;
  };
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