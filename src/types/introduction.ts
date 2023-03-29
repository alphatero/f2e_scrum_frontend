type TitleTypes = {
  id: string | number;
  content: string | string[];
}

type ArticleTypes = {
  id: string | number;
  content: string | string[];
  type: string;
}

type ImageTypes = {
  type: string;
  src?: string;
  reference?: string;
}

export interface IntroductionProps {
  info: {
    guide: string;
    button: string;
    next: string;
    tag?: string;
    image?: ImageTypes;
    article: ArticleTypes[];
    titles: TitleTypes[];
  }
}