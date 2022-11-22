// import clsx from 'clsx';
// import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TaskItem } from '../../components/exam';

function DndSample() {
  const tasks = [
    {
      id: 0,
      title: 'Read chapters for next class',
      priority: '優先度高',
      seq: 0,
    },
    {
      id: 1,
      title: 'Brainsotrm project ideas',
      priority: '優先度中',
      seq: 1,
    },
    {
      id: 2,
      title: 'run the project',
      priority: '優先度低',
      seq: 2,
    },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 space-y-5">
        <TaskItem key={tasks[0].id} task={tasks[0]} />
      </div>
    </DndProvider>

  // <DndProvider>
  //   <div className="p-4 space-y-5">

  //     <div className="p-4 border border-zinc-600 space-y-2">
  //       {
  //         tasks.map((task) => (

  //           <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
  //             <TaskItem ref={drag} key={task.id} title={task.title} priority={task.priority} />
  //           </div>
  //         ))
  //       }
  //     </div>
  //     <div
  //       ref={drop}
  //       style={{ backgroundColor: isOver ? 'red' : 'white' }}
  //       className="p-4 border border-zinc-600 space-y-2"
  //     >
  //       {/* place here */}
  //       {canDrop ? 'Release to drop' : 'Drag a box here'}
  //     </div>

  //   </div>
  // </DndProvider>
  );
}

export default DndSample;
