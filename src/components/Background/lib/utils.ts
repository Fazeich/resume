import {
  GRADIENT_SIZE,
  MAX_SPEED,
  SPEED_ACCELERATION,
  TRIANGLE_CONFIG,
} from "./constants";

export const createTriangle = (canvasWidth, canvasHeight) => ({
  x: Math.random() * canvasWidth,
  y: Math.random() * canvasHeight,

  size: TRIANGLE_CONFIG.size,

  speedX: TRIANGLE_CONFIG.speed.x,
  speedY: TRIANGLE_CONFIG.speed.y,

  angle: TRIANGLE_CONFIG.angle,
  angularSpeed: TRIANGLE_CONFIG.angularSpeed,
});

export const updateTriangle = (
  triangle,
  canvasWidth,
  canvasHeight,
  mouseX,
  mouseY
) => {
  const newSpeedX =
    triangle.speedX + (Math.random() - 0.5) * SPEED_ACCELERATION;
  const newSpeedY =
    triangle.speedY + (Math.random() - 0.5) * SPEED_ACCELERATION;

  const newX = triangle.x + newSpeedX;
  const newY = triangle.y + newSpeedY;

  const speedX = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, newSpeedX));
  const speedY = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, newSpeedY));

  const finalSpeedX = newX < 0 || newX > canvasWidth ? -speedX : speedX;
  const finalSpeedY = newY < 0 || newY > canvasHeight ? -speedY : speedY;

  const dx = newX - mouseX;
  const dy = newY - mouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = GRADIENT_SIZE;
  const opacity = distance < maxDistance ? 1 - distance / maxDistance : 0;

  const newAngle = triangle.angle + triangle.angularSpeed;

  return {
    ...triangle,
    x: newX,
    y: newY,
    speedX: finalSpeedX,
    speedY: finalSpeedY,
    angle: newAngle,
    opacity,
  };
};

export const drawTriangle = (ctx) => (triangle) => {
  ctx.save();

  ctx.translate(
    triangle.x + triangle.size / 2,
    triangle.y + (triangle.size * Math.sqrt(3)) / 4
  );
  ctx.rotate(triangle.angle);

  const centerX = 0;
  const centerY = 0;
  const size = triangle.size;
  ctx.beginPath();
  ctx.moveTo(centerX - size / 2, centerY - (size * Math.sqrt(3)) / 4);
  ctx.lineTo(centerX + size / 2, centerY - (size * Math.sqrt(3)) / 4);
  ctx.lineTo(centerX, centerY + (size * Math.sqrt(3)) / 4);
  ctx.closePath();
  ctx.strokeStyle = `rgba(120, 120, 120, ${triangle.opacity})`;
  ctx.lineWidth = 2;
  ctx.stroke();

  const pointRadius = 3;
  ctx.fillStyle = `rgba(120, 120, 120, ${triangle.opacity})`;

  ctx.beginPath();
  ctx.arc(
    centerX - size / 2,
    centerY - (size * Math.sqrt(3)) / 4,
    pointRadius,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    centerX + size / 2,
    centerY - (size * Math.sqrt(3)) / 4,
    pointRadius,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    centerX,
    centerY + (size * Math.sqrt(3)) / 4,
    pointRadius,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.restore();
};

export const createGradient = (ctx, mouseX, mouseY) => {
  const gradient = ctx.createRadialGradient(
    mouseX,
    mouseY,
    0,
    mouseX,
    mouseY,
    300
  );

  gradient.addColorStop(0, "rgba(15, 15, 31, 0.9)");

  return gradient;
};
