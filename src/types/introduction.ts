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

export interface IntroductionInfoProps {
  guide: string;
  button: string;
  next: string;
  tag?: string;
  image?: ImageTypes;
  article: ArticleTypes[];
  titles: TitleTypes[];
}

export type CardTypes = {
  id: string;
  img: string;
  intro: string[];
  introBriefly: string;
  introTitle: string;
  priority: number;
  subtitle: string;
  title: string;
}

export interface RoleInfoProps {
  button: string;
  cards: CardTypes[];
}