import clsx from 'clsx';
import { Icons } from '../Icons';

export function SubmitMsg() {
  return (
    <div
      className={clsx(
        'flex flex-row items-center gap-3',
        'my-3 px-2',
      )}
    >
      <label htmlFor="sendMsg" className="flex-1">
        <input
          id="sendMsg"
          className={clsx(
            'w-full py-2 px-3',
            'border border-solid border-gray-400 rounded-3xl',
          )}
          placeholder="請輸入"
          type="text"
        />
      </label>
      <div className="w-6 shrink-0">
        <Icons.SendMsg />
      </div>
    </div>
  );
}

export default SubmitMsg;
