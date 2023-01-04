import clsx from 'clsx';
import { BlurBlockBg } from '../../BlurBlockBg';

export function ItemContainer({ children, onClick }) {
  return (
    <div
      className={clsx(
        'grid grid-flow-row auto-rows-max',
        'rounded-lg mb-5 cursor-pointer',
      )}
      onClick={onClick}
      aria-hidden="true"
    >
      <BlurBlockBg styleType="BlurBlockB">
        {children}
      </BlurBlockBg>
    </div>
  );
}

export default ItemContainer;
