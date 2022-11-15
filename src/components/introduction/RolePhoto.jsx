import clsx from 'clsx';
import { ReactComponent as ProfilePhoto } from '../../assets/icon/profile-photo.svg';

export function RolePhoto(props) {
  const { topcss, widthcss, heightcss } = props;
  return (

    <ProfilePhoto className={clsx(
      'absolute m-auto inset-0',
      (topcss || ''),
      (widthcss || ''),
      (heightcss || ''),
    )}
    />

  );
}

export default RolePhoto;
