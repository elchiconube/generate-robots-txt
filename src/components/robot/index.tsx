'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './robot.module.css';

const RobotCss = () => {
  const [isOn, setIsOn] = useState(true);
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOn) {
      // Reset eye positions when turned off
      if (leftEyeRef.current) leftEyeRef.current.style.transform = 'translate(0, 0)';
      if (rightEyeRef.current) rightEyeRef.current.style.transform = 'translate(0, 0)';
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!leftEyeRef.current || !rightEyeRef.current || !robotRef.current) return;

      const robotRect = robotRef.current.getBoundingClientRect();
      const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
      const rightEyeRect = rightEyeRef.current.getBoundingClientRect();

      const leftEyeCenter = {
        x: leftEyeRect.left + leftEyeRect.width / 2,
        y: leftEyeRect.top + leftEyeRect.height / 2
      };
      const rightEyeCenter = {
        x: rightEyeRect.left + rightEyeRect.width / 2,
        y: rightEyeRect.top + rightEyeRect.height / 2
      };

      const calculateEyePosition = (eyeCenter: { x: number, y: number }) => {
        const angle = Math.atan2(e.clientY - eyeCenter.y, e.clientX - eyeCenter.x);
        const distance = Math.min(5, Math.hypot(e.clientX - eyeCenter.x, e.clientY - eyeCenter.y) / 12);
        
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance
        };
      };

      const leftPos = calculateEyePosition(leftEyeCenter);
      const rightPos = calculateEyePosition(rightEyeCenter);

      leftEyeRef.current.style.transform = `translate(${leftPos.x}px, ${leftPos.y}px)`;
      rightEyeRef.current.style.transform = `translate(${rightPos.x}px, ${rightPos.y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isOn]);

  const toggleRobot = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.container}>
      <div ref={robotRef} className={styles.head}>
        <div 
          className={`${styles.light} ${!isOn ? styles.off : ''}`}
          onClick={toggleRobot}
        >
          <div className={styles.bulb}></div>
          <div className={styles.stick}></div>
        </div>
        <div className={styles.ears}>
          <div className={styles.ear}></div>
          <div className={styles.ear}></div>
        </div>
        <div className={styles.eyes}>
          <div className={styles.eyeWrapper}>
            <div ref={leftEyeRef} className={`${styles.eye} ${!isOn ? styles.eyeOff : ''}`}></div>
          </div>
          <div className={styles.eyeWrapper}>
            <div ref={rightEyeRef} className={`${styles.eye} ${!isOn ? styles.eyeOff : ''}`}></div>
          </div>
        </div>
        <div className={styles.nose}></div>
        <div className={styles.mouth}>
          <div className={styles.tooth}></div>
          <div className={styles.tooth}></div>
          <div className={styles.tooth}></div>
          <div className={styles.tooth}></div>
        </div>
      </div>
    </div>
  );
};

export default RobotCss;