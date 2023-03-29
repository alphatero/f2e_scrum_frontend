export interface RequestMsgTypes {
  id: string | number;
  text: string | string[];
  requestList: MsgTypes[];
}

export type SelectListTypes = {
  id: string | number;
  text: string;
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
  page: string;
  previousPageName: string;
  nextPage: string;
  button: string;
  beginMsg: beginMsgTypes; 
  chattingLog: MsgTypes[];
  speakingLoadingData: MsgTypes;
  requestMsg: RequestMsgTypes[];
  responseMsg: {
    caption: string;
    selectList: SelectListTypes[];
  }
}