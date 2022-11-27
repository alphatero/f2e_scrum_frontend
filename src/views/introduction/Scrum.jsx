import {
  IntroductionLayout,
} from '../../components/introduction/IntroductionLayout';
import { scrumInfo } from '../../constants/introductionScrum';

export function Scrum() {
  return (
    <IntroductionLayout info={scrumInfo} />
  );
}

export default Scrum;
