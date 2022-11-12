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

      <img src="/images/introduction-role.png" alt="" />

      <Button onClick={backHome}>上一頁</Button>
      <Button>{button}</Button>
    </div>
  );
}

export default Scrum;
