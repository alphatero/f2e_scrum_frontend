import clsx from 'clsx';

export function SpeakingLoading() {
  return (
    <div className={clsx(
      'py-2 px-4 h-10 rounded-3xl',
      'text-sm bg-white drop-shadow-md',
    )}
    >
      <div className="speakLoadingDot w-10" />
    </div>
  );
}

export default SpeakingLoading;
