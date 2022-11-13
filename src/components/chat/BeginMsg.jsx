export function BeginMsg({ time, text }) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-sm text-gray-500">{ time }</p>
      {
        !!text && <p className="max-w-[240px] text-sm text-gray-500">{text}</p>
      }
    </div>
  );
}

export default BeginMsg;
