import { IntroductionLayout } from '../../components';
import { Api } from '../../components/Api';
import { BlurBlockBg } from '../../components/BlurBlockBg';

const apiSet = {
  requirProp: ['guide', 'titles', 'tag', 'article', 'button', 'next'],
  apiUrl: 'https://f2e-scrum-backend.onrender.com/api/introduction/sprint-point',
};

const notFoundPage = () => (
  <div className="h-screen flex place-content-center">
    <div className="self-center w-fit h-fit p-10 max-w-5xl mx-auto">
      <BlurBlockBg type="B">
        <span className="text-9xl text-slate-400 mr-3">404</span>
        <span className="text-xl text-slate-400">NOT FOUND PAGE</span>
        <p className="text-2xl text-slate-500 mt-3">You didn&apos;t break the internet, but we failed to get the data, please refresh the page or contact the author.</p>
      </BlurBlockBg>
    </div>
  </div>
);

export function IntroSprintPoint() {
  const result = Api(apiSet);
  console.log(result); //  eslint-disable-line no-console
  if (!result) {
    return notFoundPage();
  }

  return (
    <IntroductionLayout info={result} />
  );
}

export default IntroSprintPoint;
