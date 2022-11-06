import clsx from 'clsx';
import { SpeakingLoading } from './SpeakingLoading';

export function ChatLog({
  character, content, time, submitBySelf,
}) {
  return (
    <div
      className={clsx(
        'flex flex-row items-start gap-2',
        'pr-4',
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
            'text-xs text-gray-500',
            submitBySelf && 'self-end',
          )}
        >
          { character }
        </p>

        {/* Chat content */}
        {
          submitBySelf ? (
            <div className="p-2 h-10 rounded-3xl bg-gray-300">
              <SpeakingLoading />
            </div>
          ) : content.map(
            (item) => <p className="p-2 rounded-3xl bg-gray-300">{item}</p>,
          )
        }
      </div>

      {/* time */}
      <div className="mt-auto">
        <p className="text-xs text-gray-500">{ time }</p>
      </div>
    </div>
  );
}

export default ChatLog;
