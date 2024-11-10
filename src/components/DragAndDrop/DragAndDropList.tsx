import { useState } from 'react';
import DragAndDrop from './DragAndDrop';
const {
  DNDCore: {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    closestCorners,
  },
  DNDSortable: {
    useSortable,
    arrayMove,
    sortableKeyboardCoordinates,
    SortableContext,
    verticalListSortingStrategy,
  },
  DNDUtilities: { CSS },
} = DragAndDrop;
import Typography from '../Typography';

import './DragAndDropList.scss';

interface TaskProps {
  id: number;
  title: string;
}

export const Task = ({ id, title }: TaskProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="task"
    >
      <Typography as='h1' fontSize={16} className='task-title'>{title}</Typography>
    </div>
  );
};

interface ColumnProps {
  id: string;
  tasks: { id: number; title: string }[];
}

export const Column: React.FC<ColumnProps> = ({ tasks }) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
};

interface InputProps {
  onSubmit: (input: string) => void;
}

export const Input: React.FC<InputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input);

    setInput('');
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} className="button">
        <Typography fontSize={14}>Add</Typography>
      </button>
    </div>
  );
};

const DragAndDropList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Add tests to homepage' },
    { id: 2, title: 'Fix styling in about section' },
    { id: 3, title: 'Learn how to center a div' },
  ]);

  const addTask = (title: any) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id: number): number =>
    tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div className="drag-and-drop-list">
      <Typography fontSize={32} fontWeight="semi-bold">
        Drag and Drop test ✅
      </Typography>
      <Input onSubmit={addTask} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Column id="toDo" tasks={tasks} />
      </DndContext>
    </div>
  );
};

export default DragAndDropList;
