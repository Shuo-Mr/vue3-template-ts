export default class Particle {
  x: number; // 粒子的 x 坐标

  y: number; // 粒子的 y 坐标

  vx: number; // 粒子在 x 轴上的速度

  vy: number; // 粒子在 y 轴上的速度

  alpha: number; // 粒子的透明度

  /**
   * 创建一个粒子对象
   * @param x 粒子的初始 x 坐标
   * @param y 粒子的初始 y 坐标
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 4 - 2;
    this.vy = Math.random() * 4 - 2;
    this.alpha = 1;
  }

  /**
   * 更新粒子的位置和透明度
   */
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.01;
  }

  /**
   * 在 Canvas 上绘制粒子
   */
  draw(ctx: CanvasRenderingContext2D) {
    const context = ctx; // 创建局部变量保存 ctx 的值
    context.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    context.fillRect(this.x, this.y, 2, 2);
  }
}
