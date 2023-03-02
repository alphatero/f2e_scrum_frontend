import {
  IntroductionLayout,
} from '../../components';
import { sprintGuideInfo } from '../../constants/introductionSprintGuide';

export function SprintGuide() {
  return (
    <IntroductionLayout info={sprintGuideInfo} />
  );
}

export default SprintGuide;
