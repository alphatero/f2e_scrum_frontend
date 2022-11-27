import {
  IntroductionLayout,
} from '../../components/introduction/IntroductionLayout';
import { sprintGuideInfo } from '../../constants/introductionSprintGuide';

export function SprintGuide() {
  return (
    <IntroductionLayout info={sprintGuideInfo} />
  );
}

export default SprintGuide;
