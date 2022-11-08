import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { HomeInfo } from '../../constants/homeInfo';

function Home() {
  const navigate = useNavigate();
  const { speechBubble, button } = HomeInfo;

  const backHome = () => {
    navigate('/');
  };

  return (

    <div className="h-full w-full bg-black bg-[url('https://source.unsplash.com/random/150x200')] bg-cover bg-center">

      <div className="absolute m-auto inset-0 w-fit h-fit">

        <div className="w-fit h-fit border-4 border-white rounded-3xl bg-white/[.8] py-2 px-5 mb-20">{speechBubble[0].content}</div>
        <div className="w-fit h-fit border-4 border-white rounded-3xl bg-white/[.8] py-2 px-5 mb-10 ml-[50%]">{speechBubble[1].content}</div>
        <div className="w-fit h-fit border-4 border-white rounded-3xl bg-white/[.8] py-2 px-5 ml-[-15px] ">{speechBubble[2].content}</div>

        <div className="text-8xl">Scrum？</div>

        <div className="w-fit h-fit border-4 border-white rounded-3xl bg-white/[.8] py-2 px-5 mt-20 ml-[-15px]">{speechBubble[3].content}</div>
        <div className="w-fit h-fit border-4 border-white rounded-3xl bg-white/[.8] py-2 px-5 mt-20 ml-[33%] text-center">
          <div>{speechBubble[4].content}</div>
          <div>{speechBubble[5].content}</div>
        </div>

      </div>

      <div className="absolute m-auto inset-x-0 bottom-0 w-full flex justify-center">

        <Button onClick={backHome}>{button}</Button>
      </div>

    </div>
  );
}

export default Home;
