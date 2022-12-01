/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowDownCircle, DroppableComponent, DraggleCard } from './exam';

export function DragLayout({ info, speechTexts }) {
  const navigate = useNavigate();
  const {
    tasks, button, type, next,
  } = info;

  const [itemObj, setItemObj] = useState({
    candidate: {
      items: [...tasks],
    },
    productBacklog: {
      items: [],
    },
  });
  const answerArray = ['1', '2', '3', '4'];
  const [isOrderCorrect, setIsOrderCorrect] = useState(null);
  const [speech, setSpeech] = useState(speechTexts.ready);
  const [length, setLength] = useState(itemObj.productBacklog.items.length);
  const [point, setPoint] = useState(0);

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

    const handleBackLog = () => {
      const currentProductBacklogOrder = newItemObj.productBacklog.items.map(
        (ele) => ele.seq,
      );
      setLength(currentProductBacklogOrder.length);
      return currentProductBacklogOrder.join('') === answerArray.join('');
    };

    const handlePoint = () => {
      const points = newItemObj.productBacklog.items.map((item) => item.priority);
      const sum = points
        .reduce((acc, value) => acc + value, 0);
      setPoint(sum);
      const pointsLength = points.length;
      setLength(pointsLength);

      if (sum < 20 && pointsLength === 2) {
        return true;
      }
      return false;
    };

    // 確認productBacklog順序
    const checkProductBacklogOrder = () => {
      if (type === 'backlog') {
        return handleBackLog();
      }
      return handlePoint();
    };

    setIsOrderCorrect(checkProductBacklogOrder);
  };

  const backPage = () => {
    navigate(-1);
  };

  const nextPage = () => {
    navigate(next);
  };

  useEffect(() => {
    if (itemObj.productBacklog.items.length === 4 && !isOrderCorrect) {
      setSpeech(speechTexts.error);
    }

    if (isOrderCorrect) {
      setSpeech('恭喜你擺放正確囉！');
    }
  }, [itemObj]);

  return (
    <div className="p-4">
      <div className={clsx('flex flex-col lg:flex-row lg:items-stretch', 'h-full max-w-5xl mx-auto lg:px-20')}>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={clsx(
            'w-full border p-3 lg:flex-1 mt-6',
            'bg-gradient-to-b from-white/70 to-white/30 bg-clip-padding bg-opacity-70',
            'backdrop-filter rounded-lg h-[300px] lg:h-[378px]',
          )}
          >
            <DroppableComponent droppableId="candidate">
              {(provided) => (
                <div className="flex flex-col space-y-3" ref={provided.innerRef} {...provided.droppableProps}>
                  {itemObj.candidate.items.map((task, index) => (
                    <DraggleCard item={task} key={task.id} index={index} type={type} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </DroppableComponent>
          </div>

          <div className={clsx('flex items-center justify-center', 'w-full text-center m-3 lg:w-auto')}>
            <ArrowDownCircle />
          </div>

          <div className={clsx('flex flex-col lg:flex-1 items-center', 'w-full max-w-5xl mx-auto')}>
            {
          type === 'point'
            ? (
              <p className="w-full text-right mb-2 text-xs text-slate-500">
                <span className={clsx('text-base px-1', point > 20 ? 'text-red-500' : 'text-black')}>{point}</span>
                /20point
              </p>
            )
            : <p className="w-full text-right mb-2 text-xs text-slate-500">優先度高</p>
        }
            <div className={clsx(
              'w-full border p-3',
              'bg-gradient-to-b from-white/70 to-white/30 bg-clip-padding bg-opacity-70',
              'backdrop-filter rounded-lg h-[300px] lg:h-[378px]',
              (!isOrderCorrect && length === 4) || point > 20 ? 'border-red-500' : 'border-white',
            )}
            >
              {/* drag to here */}
              <DroppableComponent droppableId="productBacklog">
                {(provided) => (
                  <div className="flex flex-col space-y-3" ref={provided.innerRef} {...provided.droppableProps}>
                    {itemObj.productBacklog.items.map((task, index) => (
                      <DraggleCard item={task} key={task.id} index={index} type={type} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </DroppableComponent>
            </div>
            {
          type === 'backlog'
          && <p className="w-full text-right mt-2 text-xs text-slate-500">優先度低</p>
       }
          </div>

        </DragDropContext>
      </div>

      <div className="flex justify-center mt-8 max-w-5xl mx-auto">
        <Button
          onClick={nextPage}
          className="w-full"
          btnType="primary"
          isRabbit
          speechText={speech}
          disabled={!isOrderCorrect}
        >
          {button}

        </Button>
      </div>

      <div className="flex justify-center mt-3 max-w-5xl mx-auto">
        <Button onClick={backPage} btnType="secondary">回上頁</Button>
      </div>

    </div>
  );
}

export default DragLayout;
