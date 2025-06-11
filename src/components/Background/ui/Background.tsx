import React, { FC } from "react";
import { StyledCanvas } from "../lib/styles";
import {
  createGradient,
  createTriangle,
  drawTriangle,
  updateTriangle,
} from "../lib/utils";

export const Background: FC<{ children }> = ({ children }) => {
  const { useEffect, useRef } = React;

  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trianglesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Пересоздаем треугольники при изменении размера
      trianglesRef.current = Array.from({ length: 50 }, () =>
        createTriangle(canvas.width, canvas.height)
      );
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // Отслеживание курсора
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Анимация
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Отрисовка градиента
      ctx.fillStyle = createGradient(
        ctx,
        mousePos.current.x,
        mousePos.current.y
      );
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Обновление и отрисовка треугольников
      trianglesRef.current = trianglesRef.current.map((triangle) =>
        updateTriangle(
          triangle,
          canvas.width,
          canvas.height,
          mousePos.current.x,
          mousePos.current.y
        )
      );
      trianglesRef.current.forEach(drawTriangle(ctx));

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Очистка
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      <StyledCanvas ref={canvasRef} />
      {children}
    </div>
  );
};
