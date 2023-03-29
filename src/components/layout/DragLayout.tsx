/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { Button, BlurBlockBg } from 'components/common';
import { ButtonRabbit } from '@/components/introduction/ButtonRabbit';
import { ArrowDownCircle, DroppableBox, DraggleCard } from '@/components/exam';
import { calculateSum } from '@/utils';
import { DragLayoutProps } from 'types';

const status = {
  ready: 'ready',
  success: 'success',
  error: 'error',
};

export function DragLayout({ info, speechTexts }: DragLayoutProps) {
  const answerArray = ['1', '2', '3', '4'];
  const navigate = useNavigate();
  const { tasks, button, type, next } = info;

  const [itemObj, setItemObj] = useState({
    candidate: {
      items: [...tasks],
    },
    productBacklog: {
      items: [],
    },
  });
  const [result, setResult] = useState(status.ready);
  const [speech, setSpeech] = useState(speechTexts.ready);
  const [point, setPoint] = useState(0);

  /**
   * 處理 Drag 行為
   * @param event;
   */
  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    // 拷貝新的items (來自state)
    const newItemObj = { ...itemObj };

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
  };

  const handleBackLog = (array) => {
    const currentOrder = array.map((ele) => ele.seq);

    if (array.length === 4) {
      return currentOrder.join('') === answerArray.join('')
        ? status.success
        : status.error;
    }

    return status.ready;
  };

  const handlePoint = (array) => {
    const points = array.map((item) => item.priority);

    const pointSum = calculateSum(points);

    setPoint(pointSum);

    if (points.length > 1) {
      return pointSum < 20 ? status.success : status.error;
    }
    return status.ready;
  };

  /**
   * 處理不同頁分類對應功能
   * @param array
   * @returns {string}
   */
  const checkCorrect = (array) => {
    if (type === 'backlog') {
      return handleBackLog(array);
    }
    return handlePoint(array);
  };

  /**
   * 結果對應處理
   * @param {string} ans
   */
  const handleResult = (ans) => {
    switch (ans) {
      case 'success': {
        setResult(status.success);
        setSpeech('恭喜你擺放正確囉！');
        break;
      }
      case 'error': {
        setResult(status.error);
        setSpeech(speechTexts.error);
        break;
      }
      case 'ready': {
        setSpeech(speechTexts.ready);
        setResult(status.ready);
        break;
      }
      default: {
        break;
      }
    }
  };

  const backPage = () => {
    navigate(-1);
  };

  const nextPage = () => {
    navigate(next);
  };

  useEffect(() => {
    const currentArray = itemObj.productBacklog.items;

    handleResult(checkCorrect(currentArray));
  }, [itemObj]);

  return (
    <div className="flex flex-col p-4 lg:pt-8 h-full">
      <div
        className={clsx(
          'flex flex-col lg:flex-row lg:items-stretch',
          'w-full max-w-5xl mx-auto lg:px-20',
        )}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <BlurBlockBg type="C">
            <DroppableBox droppableId="candidate">
              {(provided) => (
                <div
                  className="flex flex-col space-y-3"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.candidate.items.map((task, index) => (
                    <DraggleCard
                      item={task}
                      key={task.id}
                      index={index}
                      type={type}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </DroppableBox>
          </BlurBlockBg>

          <div
            className={clsx(
              'flex items-center justify-center',
              'w-full text-center m-3 lg:w-auto',
            )}
          >
            <ArrowDownCircle />
          </div>
          <BlurBlockBg
            type="C"
            className={
              result === status.error ? 'border-red-500' : 'border-white'
            }
          >
            {type === 'point' ? (
              <p
                className={clsx(
                  'w-full absolute top-0 -translate-y-8',
                  'text-right mb-2 text-xs text-slate-500',
                )}
              >
                <span
                  className={clsx(
                    'text-base px-1',
                    result === status.error ? 'text-red-500' : 'text-black',
                  )}
                >
                  {point}
                </span>
                /20point
              </p>
            ) : (
              <p
                className={clsx(
                  'w-full absolute top-0 right-0 -translate-y-6',
                  'text-right mb-2 text-xs text-slate-500',
                )}
              >
                優先度高
              </p>
            )}
            {/* drag to here */}
            <DroppableBox droppableId="productBacklog">
              {(provided) => (
                <div
                  className="flex flex-col space-y-3"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.productBacklog.items.map((task, index) => (
                    <DraggleCard
                      item={task}
                      key={task.id}
                      index={index}
                      type={type}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </DroppableBox>
            {type === 'backlog' && (
              <p
                className={clsx(
                  'w-full absolute bottom-0 translate-y-6',
                  'text-right mt-2 text-xs text-slate-500',
                )}
              >
                優先度低
              </p>
            )}
          </BlurBlockBg>
        </DragDropContext>
      </div>

      <div
        className={clsx(
          'w-full flex-1 gap-5 mt-8 pb-2 lg:pb-0',
          'flex flex-col justify-end items-center',
        )}
      >
        <ButtonRabbit
          onClick={nextPage}
          speechText={speech}
          disabled={result !== status.success}
        >
          {button}
        </ButtonRabbit>
        <Button onClick={backPage} btnType="secondary">
          回上頁
        </Button>
      </div>
    </div>
  );
}

export default DragLayout;
