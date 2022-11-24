import clsx from 'clsx';

export function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      className={clsx(
        'flex justify-center ',
        ' bg-gray-300',
        'py-4 rounded-3xl',
        className,
      )}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
}

export default Button;
