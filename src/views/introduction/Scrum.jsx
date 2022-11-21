// import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { scrumInfo } from '../../constants/introduction';

export function Scrum() {
  const navigate = useNavigate();
  const { title, article, button } = scrumInfo;

  const backHome = () => {
    navigate('/');
  };

  return (
    <div className="flex h-3/4 flex-col justify-between items-center">
      <article className="flex flex-col items-center px-4">
        <h2 className="font-bold">{title}</h2>
        {article.map((word) => (
          <p key={`article_${word.id}`} className="py-2">
            {word.content}
          </p>
        ))}
      </article>

      <div className="flex justify-center items-center relative">
        <span className="flex w-72">
          {/* <Icons.TrianglePath /> */}
          {/* <Icons.PathBall className="absolute" /> */}

          {/*
          <motion.div
            style={{ width: '116px', height: '50px' }}
            animate={{ scale: [1, 2] }}
            transition={{ duration: 1 }}
          >
            <Icons.CurrentRole className="absolute w-72" />
          </motion.div> */}
          {/* <Icons.TriangleTitle className="absolute" /> */}
        </span>
      </div>

      <Button onClick={backHome}>上一頁</Button>
      <Button>{button}</Button>
    </div>
  );
}

export default Scrum;
