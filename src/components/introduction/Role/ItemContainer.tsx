import clsx from 'clsx';
import { BlurBlockBg } from 'components/common';

interface ItemContainerProps {
  children: React.ReactNode;
  onClick: () => void;
  openState: boolean;
}

export function ItemContainer({
  children,
  onClick,
  openState,
}: ItemContainerProps) {
  return (
    <div
      className={clsx(
        openState ? 'h-[405px] md:h-[375px]' : 'h-[78px] md:h-[126px]',
        'transition-height duration-300 ease-linear',
        'grid grid-flow-row auto-rows-max',
        'rounded-lg mb-5 cursor-pointer',
      )}
      onClick={onClick}
      aria-hidden="true"
    >
      <BlurBlockBg type="B">{children}</BlurBlockBg>
    </div>
  );
}

export default ItemContainer;
