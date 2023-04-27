import clsx from 'clsx';

type ChoiceMsgProps = {
  text: string;
  value: number;
};

type ChoiceResponseProps = {
  caption: string;
  selectList: {
    id: string | number;
    text: string;
    value: number;
  }[];
  setChoiceMsg: ({ text, value }: ChoiceMsgProps) => void;
  disabled: boolean;
};

export function ChoiceResponse({
  caption,
  selectList,
  setChoiceMsg,
  disabled,
}: ChoiceResponseProps) {
  return (
    <>
      <p className="text-xs md:text-sm text-slate-600">{caption}</p>
      <ul className="flex flex-row gap-4 overflow-x-auto">
        {selectList?.map((item) => (
          <li key={item.id}>
            <button
              disabled={disabled}
              className={clsx(
                'shrink-0 py-2 px-4 rounded-3xl whitespace-nowrap',
                'bg-teal-500 text-white text-sm md:text-base cursor-pointer',
                'hover:bg-teal-300 active:bg-teal-600',
              )}
              type="submit"
              onClick={() =>
                !disabled &&
                setChoiceMsg({ text: item.text, value: item.value })
              }
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ChoiceResponse;
