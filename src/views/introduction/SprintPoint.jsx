import { IntroductionLayout } from '../../components';
import { Api } from '../../components/Api';

const apiSet = {
  requirProp: ['guide', 'titles', 'tag', 'article', 'button', 'next'],
  apiUrl: process.env.REACT_APP_API_INTRODUCTION_SPRINTPOINT,
};

export function IntroSprintPoint() {
  const result = Api(apiSet);

  if (!result) return (<p>loading</p>);

  return (
    <IntroductionLayout info={result} />
  );
}

export default IntroSprintPoint;
