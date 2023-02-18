import { IntroductionLayout } from '../../components';
import { Api } from '../../components/Api';
import { BlurBlockBg } from '../../components/BlurBlockBg';

const apiSet = {
  requirProp: ['guide', 'titles', 'tag', 'article', 'button', 'next'],
  apiUrl: 'https://f2e-scrum-backend.onrender.com/api/introduction/sprint-point',
};

const loadingPage = () => (
  <div className="h-screen flex place-content-center">
    <div className="self-center w-fit h-fit p-10 max-w-5xl mx-auto">
      <BlurBlockBg type="B">
        <span className="text-5xl text-slate-400 mr-3">Loading</span>
        <span className="text-xl text-slate-400">page...</span>
        <p className="text-2xl text-slate-500 mt-3">Please wait a moment.</p>
      </BlurBlockBg>
    </div>
  </div>
);

export function IntroSprintPoint() {
  const result = Api(apiSet);

  if (!result) return loadingPage();

  return (
    <IntroductionLayout info={result} />
  );
}

export default IntroSprintPoint;
