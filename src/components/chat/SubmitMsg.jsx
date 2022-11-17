import clsx from 'clsx';
import { Icons } from '../Icons';

export function SubmitMsg({ choiceMsg, setSendMsg }) {
  return (
    <div
      className={clsx(
        'flex flex-row items-center gap-3',
        'my-3 px-2',
      )}
    >
      <textarea
        id="sendMsg"
        className={clsx(
          'w-full py-2 px-3',
          'border border-solid border-gray-400 rounded-3xl',
          'resize-none outline-none',
        )}
        placeholder="請輸入"
        value={choiceMsg}
        disabled
      />

      <button
        onClick={() => setSendMsg(choiceMsg)}
        type="submit"
        className="w-6 shrink-0"
      >
        <Icons.SendMsg className={clsx(
          choiceMsg ? 'text-slate-700' : 'text-slate-300',
        )}
        />
      </button>
    </div>
  );
}

export default SubmitMsg;
