import { IntroductionLayout } from '../../components';
import { Api } from '../../components/Api';

const apiSet = {
  requirProp: ['guide', 'titles', 'tag', 'image', 'article', 'button', 'next'],
  apiUrl: process.env.REACT_APP_API_INTRODUCTION_SCRUM,
};

export function Scrum() {
  const result = Api(apiSet);

  if (!result) return (<p>loading</p>);

  return (
    <IntroductionLayout info={result} />
  );
}

export default Scrum;
