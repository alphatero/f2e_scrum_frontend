import clsx from 'clsx';
import { SpeakingLoading } from './SpeakingLoading';

export function ChatLog({ data }) {
  const {
    character, content, time, submitBySelf,
  } = data;

  return (
    <div
      className={clsx(
        'flex flex-row items-start gap-2',
        submitBySelf && 'flex-row-reverse',
      )}
    >

      {/* Avatar */}
      <div
        className={clsx(
          'flex-shrink-0 flex-grow-0',
          'w-8 h-8',
          'overflow-hidden rounded-full bg-gray-300',
        )}
      >
        <img
          className="object-cover object-center"
          src="#"
          alt="avatar alt"
        />
      </div>

      {/* Chat content */}
      <div className="flex flex-col gap-2 max-w-[60%]">

        {/* character title */}
        <p
          className={clsx(
            'inline-block self-start',
            'text-xs text-slate-700',
            submitBySelf && 'self-end',
          )}
        >
          { character }
        </p>

        {/* Chat content */}
        {
          submitBySelf ? (
            <SpeakingLoading />
          ) : content.map(
            (msg) => (
              <div
                key={msg.length}
                className={clsx(
                  'py-2 px-4 rounded-3xl',
                  'bg-teal-500 text-sm text-white drop-shadow-md',
                )}
              >
                <p>{msg}</p>
              </div>
            ),
          )
        }
      </div>

      {/* time */}
      <div className="mt-auto">
        <p className="text-xs text-slate-700">{ time }</p>
      </div>
    </div>
  );
}

export default ChatLog;
