import clsx from 'clsx';
import { Icons } from 'components/common';

type ChoiceMsgProps = {
  text: string;
  value: number | null;
};

type SubmitMsgProps = {
  choiceMsg: string;
  setChoiceMsg: ({ text, value }: ChoiceMsgProps) => void;
  setSendMsg: (msg: string) => void;
  onSubmit: () => void;
};

export function SubmitMsg({
  choiceMsg,
  setChoiceMsg,
  setSendMsg,
  onSubmit,
}: SubmitMsgProps) {
  const handleClick = (msg: string) => {
    if (!msg) return;
    setSendMsg(msg);
    setChoiceMsg({ text: '', value: null });
    onSubmit();
  };

  return (
    <div className={clsx('flex flex-row items-center gap-3', 'my-3 px-2')}>
      <textarea
        id="sendMsg"
        className={clsx(
          'w-full py-2 px-3',
          'border border-solid border-gray-400 rounded-3xl',
          'resize-none outline-none',
        )}
        placeholder="請輸入"
        value={choiceMsg}
        readOnly
      />

      <button
        onClick={() => handleClick(choiceMsg)}
        type="submit"
        className="w-6 shrink-0"
      >
        <Icons.SendMsg
          className={clsx(choiceMsg ? 'text-slate-700' : 'text-slate-300')}
        />
      </button>
    </div>
  );
}

export default SubmitMsg;
