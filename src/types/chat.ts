export interface RequestMsgTypes {
  id: string | number;
  text: string | string[];
  requestList: MsgTypes[];
}

export type SelectListTypes = {
  id: string | number;
  text: string;
  value: number;
}

export type MsgTypes = {
  id?: string | number | null;
  character: string;
  avatar: string;
  content: string | string[] | null;
  time?: string;
  submitBySelf?: boolean;
  end?: boolean;
  text?: string;
}

type beginMsgTypes = {
  time: string,
  text: string
};

export interface ChatProps {
  previousPageName: string;
  nextPage: string;
  button: string;
  beginMsg: beginMsgTypes; 
  chattingLog: MsgTypes[];
  speakingLoadingData: MsgTypes;
  responseMsg: {
    caption: string;
    selectList: SelectListTypes[];
  }
}
