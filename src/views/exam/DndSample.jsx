// import clsx from 'clsx';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'; //
import { useState } from 'react';

function DndSample() {
  const [items] = useState([
    {
      id: 1,
      content: 'item1',
    },
    {
      id: 2,
      content: 'item2',
    },
    {
      id: 3,
      content: 'item3',
    },
  ]);

  return (
    <div className="p-4">

      <DragDropContext
        onBeforeCapture={() => console.log('onBeforeCapture')} // eslint-disable-line no-console
        onBeforeDragStart={() => console.log('onBeforeDragStart')} // eslint-disable-line no-console
        onDragStart={() => console.log('onDragStart')} // eslint-disable-line no-console
        onDragUpdate={() => console.log('onDragUpdate')} // eslint-disable-line no-console
        onDragEnd={() => console.log('onDragEnd')} // eslint-disable-line no-console
      >
        <Droppable droppableId="droppable-1">
          {(provided) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/*
                provided.innerRef
                套件的機制所需, 直接去取用 dom 的 ref, 就是套用的例行公事
              */}

              {items.map((item, index) => (
              // 以 map 方式渲染每個拖曳卡片 (Draggable)

                <Draggable key={`item_${item.id}`} draggableId={`item_${item.id}`} index={index}>
                  {/* // draggableId: 該卡片的唯一識別ID */}
                  {(dragProvided) => (
                  /*
                    ...provided.droppableProps
                    ...provided.draggableProps
                    ...provided.dragHandleProps
                    單純展開其他必要的 props
                  */

                    <div
                      ref={dragProvided.innerRef}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...dragProvided.draggableProps}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...dragProvided.dragHandleProps}
                    >

                      {/* 實際上的卡片內容 */}
                      {item.content}
                      {/* 實際上的卡片內容 */}

                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
        <div>Hello world</div>
      </DragDropContext>
    </div>

  );
}

export default DndSample;
