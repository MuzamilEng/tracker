import React, { useState } from "react";
import { tracker } from "../app/Data";
import { DndContext, closestCenter, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors, DragOverlay, defaultDropAnimation,
} from "@dnd-kit/core";
import { useSortable, SortableContext, verticalListSortingStrategy, arrayMove,} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Column = ({ id, items, index }) => {
  const {
    setNodeRef,
    listeners,
    isDragging,
    over,
    transform,
    transition,
  } = useSortable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        padding: 8,
        margin: 4,
        background: over ? "#f0f0f0" : "#eee",
        border: "1px solid #ddd",
        borderRadius: 4,
        transition: transition || undefined,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : undefined,
      }}
      {...listeners}
    >
      {id}
      {items.map((item) => (
        <div key={item.title} className="p-vw">
          <h1>{item.title}</h1>
          {/* <h1>{item.age}</h1> */}
        </div>
      ))}
    </div>
  );
};

const ColumnDragAndDrop = () => {
 
  const [items, setItems] = useState({
    A: tracker,
    B: tracker,
  });

  const [containers, setContainers] = useState(Object.keys(items));
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: (monitorProps) => {
        const rect = monitorProps.rect;
        return {
          x: rect.width / 2,
          y: rect.height / 2,
        };
      },
    })
  );

  const dropAnimation = {
    ...defaultDropAnimation,
    dragSourceOpacity: 0.5,
  };

  const onDragEnd = ({ over }) => {
    if (!over) return;

    const overId = over.id;

    if (overId === "trash") {
      // Handle delete logic
      console.log(`Deleted column: ${activeId}`);
    } else if (overId !== activeId) {
      setContainers((prevContainers) =>
        arrayMove(prevContainers, prevContainers.indexOf(activeId), prevContainers.indexOf(overId))
      );
    }

    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => setActiveId(active.id)}
      onDragEnd={onDragEnd}
    >
      <div style={{ display: "flex" }}>
        {containers.map((containerId, index) => (
          <SortableContext
            key={containerId}
            items={items[containerId]}
            strategy={verticalListSortingStrategy}
          >
            <Column id={containerId} items={items[containerId]} index={index} />
          </SortableContext>
        ))}
      </div>
      <DragOverlay dropAnimation={dropAnimation}>
        {activeId && <Column id={activeId} items={items[activeId]} index={containers.indexOf(activeId)} />}
      </DragOverlay>
    </DndContext>
  );
};

export default ColumnDragAndDrop;