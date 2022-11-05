import clsx from 'clsx';

export function Button({ children, onClick }) {
  return (
    <button
      type="button"
      className={clsx(
        'flex justify-center ',
        ' bg-gray-300',
        'py-4 w-3/4 md:w-60 rounded-3xl',
      )}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
}

export default Button;
