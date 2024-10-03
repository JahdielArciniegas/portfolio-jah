import kaboom from "kaboom";

const k = kaboom({
  font: "sans-serif",
  canvas: document.querySelector("#game"),
  background: [24, 24, 50],
});

const SPEED = 320;
k.loadSprite("primera", "./PrimeraEv.png", {
  sliceX: 4,
  sliceY: 4,
  anims: {
    "idle-down": 0,
    "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
    "idle-side": 4,
    "walk-side": { from: 4, to: 7, loop: true, speed: 8 },
    "idle-up": 8,
    "walk-up": { from: 8, to: 11, loop: true, speed: 8 },
  },
});

k.loadSprite("segunda", "./SegundaEv.png", {
  sliceX: 4,
  sliceY: 4,
  anims: {
    "idle-down": 0,
    "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
    "idle-side": 4,
    "walk-side": { from: 4, to: 7, loop: true, speed: 8 },
    "idle-up": 8,
    "walk-up": { from: 8, to: 11, loop: true, speed: 8 },
  },
});

k.loadSprite("tercera", "./TerceraEv.png", {
  sliceX: 4,
  sliceY: 4,
  anims: {
    "idle-down": 0,
    "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
    "idle-side": 4,
    "walk-side": { from: 4, to: 7, loop: true, speed: 8 },
    "idle-up": 8,
    "walk-up": { from: 8, to: 11, loop: true, speed: 8 },
  },
});

k.loadSprite("cuarta", "./CuartaEv.png", {
  sliceX: 4,
  sliceY: 4,
  anims: {
    "idle-down": 0,
    "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
    "idle-side": 4,
    "walk-side": { from: 4, to: 7, loop: true, speed: 8 },
    "idle-up": 8,
    "walk-up": { from: 8, to: 11, loop: true, speed: 8 },
  },
});

const player = k.add([
  k.sprite("primera", { anim: "idle-down" }),
  k.scale(7),
  k.pos(k.center()),
  k.anchor("center"),
]);

player.onUpdate(() => {
  k.camPos(player.worldPos());
});
k.onKeyDown("left", () => {
  player.move(-SPEED, 0);
  player.flipX = true;
  if (player.curAnim() !== "walk-side") player.play("walk-side");
  console.log(player);
  return;
});
k.onKeyDown("right", () => {
  player.move(SPEED, 0);
  player.flipX = false;
  if (player.curAnim() !== "walk-side") player.play("walk-side");
  return;
});
k.onKeyDown("up", () => {
  player.move(0, -SPEED);
  if (player.curAnim() !== "walk-up") player.play("walk-up");
  return;
});
k.onKeyDown("down", () => {
  player.move(0, SPEED);
  if (player.curAnim() !== "walk-down") player.play("walk-down");
  return;
});
