import { IntroductionLayout } from 'components';
import { scrumInfo } from 'constants/introductionScrum';

export function Scrum() {
  return <IntroductionLayout info={scrumInfo} />;
}

export default Scrum;
