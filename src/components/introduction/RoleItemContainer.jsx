import clsx from 'clsx';
import { BlurBlockBg } from '../BlurBlockBg';

export function RoleItemContainer({ children, onClick }) {
  return (
    <div
      className={clsx(
        'grid grid-flow-row auto-rows-max',
        'rounded-lg mb-5',
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

export default RoleItemContainer;
