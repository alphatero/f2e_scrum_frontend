import clsx from 'clsx';

export function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      className={clsx(
        'flex justify-center ',
        'py-4 w-3/4 md:w-60 rounded-3xl',
        className,
      )}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
}

export default Button;
