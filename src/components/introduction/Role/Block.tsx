import { motion } from 'framer-motion';

interface ShapeType {
  style?: {
    x: number,
    y:number,
  },
  x: number,
  y: number,
};
interface ItemType {
  id: number,
  rect: ShapeType,
  circle: ShapeType
};
interface ParamsType {
  item: ItemType
};

export function Block({ item }: ParamsType) {
  const { rect, circle } = item;

  return (
    <>
      <motion.circle
        style={circle.style}
        animate={{ x: circle.x, y: circle.y }}
        transition={{ duration: 2, delay: 0.8 }}
        r="4"
        fill="#FDE047"
      />
      <motion.rect
        x={rect.x}
        y={rect.y}
        rx="25"
        fill="#FDE047"
        style={{ x: 55, y: 20 }}
        initial={{ width: 4, height: 4 }}
        animate={{
          x: 0,
          width: 116,
          height: 50,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      />
    </>
  );
}

export default Block;
