import { useState, useEffect } from 'react';
import styles from './grid-decoration.module.css';

interface GridDecorationProps {
  rows?: number;
  cols?: number;
}

const GridDecoration: React.FC<GridDecorationProps> = ({ 
  rows = 6, 
  cols = 25 
}) => {
  const [activeCells, setActiveCells] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly activate/deactivate cells
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      const cellId = `${row}-${col}`;
      
      setActiveCells(prev => ({
        ...prev,
        [cellId]: !prev[cellId]
      }));

      // Remove active state after 2 seconds
      setTimeout(() => {
        setActiveCells(prev => {
          const newState = { ...prev };
          delete newState[cellId];
          return newState;
        });
      }, 2000);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [rows, cols]);

  return (
    <div className={styles.decoration}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`${styles.cell} ${
                activeCells[`${rowIndex}-${colIndex}`] ? styles.active : ''
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridDecoration;