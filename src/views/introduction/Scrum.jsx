import {
  IntroductionLayout,
} from '../../components';
import { scrumInfo } from '../../constants/introduction';

export function Scrum() {
  return (
    <IntroductionLayout info={scrumInfo} />
  );
}

export default Scrum;
