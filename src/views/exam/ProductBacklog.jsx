/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { Button, BlurBlockBg } from '../../components';
import { ExamProductBacklogInfo } from '../../constants/examProductBacklogInfo';
import { ArrowDownCircle, DroppableComponent, DraggleCard } from '../../components/exam';

function ProductBacklog() {
  const navigate = useNavigate();
  const { tasks, button } = ExamProductBacklogInfo;
  const [itemObj, setItemObj] = useState({
    candidate: {
      items: tasks,
    },
    productBacklog: {
      items: [],
    },
  });
  const answerArray = ['1', '2', '3', '4'];
  const [isOrderCorrect, setIsOrderCorrect] = useState(null);
  const [speech, setSpeech] = useState('拖曳任務試試看吧！');
  const [length, setLength] = useState(itemObj.productBacklog.items.length);

  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    // 拷貝新的items (來自state)
    const newItemObj = { ...itemObj };

    // splice(start, deleteCount, item )
    // 從source剪下被拖曳的元素
    const [remove] = newItemObj[source.droppableId].items.splice(
      source.index,
      1,
    );

    // 在destination位置貼上被拖曳的元素
    newItemObj[destination.droppableId].items.splice(
      destination.index,
      0,
      remove,
    );

    // set state新的 itemObj
    setItemObj(newItemObj);

    // 確認productBacklog順序
    const checkProductBacklogOrder = () => {
      const currentProductBacklogOrder = newItemObj.productBacklog.items.map(
        (ele) => ele.seq,
      );
      setLength(currentProductBacklogOrder.length);
      return currentProductBacklogOrder.join('') === answerArray.join('');
    };

    setIsOrderCorrect(checkProductBacklogOrder);
  };

  const backHome = () => {
    console.log(isOrderCorrect);

    navigate('/');
  };

  useEffect(() => {
    if (itemObj.productBacklog.items.length === 4 && !isOrderCorrect) {
      setSpeech('唉呀！優先度好像擺放錯誤囉！再試試看！');
    }

    if (isOrderCorrect) {
      setSpeech('恭喜你擺放正確囉！');
    }
  }, [itemObj]);

  return (
    <div className="p-4">

      <DragDropContext onDragEnd={onDragEnd}>
        <BlurBlockBg styleType="BlurBlockB" className="h-72">
          <DroppableComponent droppableId="candidate">
            {(provided) => (
              <div className="flex flex-col space-y-3" ref={provided.innerRef} {...provided.droppableProps}>
                {itemObj.candidate.items.map((task, index) => (
                  <DraggleCard item={task} key={task.id} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </DroppableComponent>
        </BlurBlockBg>

        <div className="w-full h-5 text-center m-3">
          <ArrowDownCircle />
        </div>
        <p className="w-full text-right mb-2 text-xs text-slate-500">優先度高</p>

        <div className={clsx(
          'w-full max-w-5xl border  p-3 mx-auto',
          'bg-gradient-to-b from-white/70 to-white/30 bg-clip-padding bg-opacity-70',
          'backdrop-filter rounded-lg h-72',
          !isOrderCorrect && length === 4 ? 'border-red-500' : 'border-white',
        )}
        >
          {/* drag to here */}
          <DroppableComponent droppableId="productBacklog">
            {(provided) => (
              <div className="flex flex-col space-y-3" ref={provided.innerRef} {...provided.droppableProps}>
                {itemObj.productBacklog.items.map((task, index) => (
                  <DraggleCard item={task} key={task.id} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </DroppableComponent>
        </div>

        <p className="w-full text-right mt-2 text-xs text-slate-500">優先度低</p>
      </DragDropContext>

      <div className="flex justify-center">
        <Button
          onClick={backHome}
          className="w-full"
          btnType="primary"
          isRabbit
          speechText={speech}
          disabled={!isOrderCorrect}
        >
          {button}

        </Button>
      </div>

      <div className="flex justify-center mt-3">
        <Button
          onClick={backHome}
          className="w-full"
          btnType="secondary"
        >
          回上頁
        </Button>
      </div>

    </div>
  );
}

export default ProductBacklog;
