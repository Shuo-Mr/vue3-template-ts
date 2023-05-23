<template>
  <canvas ref="canvasRef" width="600" height="600"></canvas>
</template>

<script lang="ts">
import {
  onMounted, ref, defineComponent,
} from 'vue';

export default defineComponent({
  name: 'CanvasPage',
  setup() {
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    const fireworks: { x: number; y: number }[] = [];

    // 绘制烟花的函数
    function explodeFirework(ctx: CanvasRenderingContext2D, x: number, y: number) {
      // 自定义烟花的样式和动画效果
      const colors = [
        '#FF0000', // 红色
        '#00FF00', // 绿色
        '#0000FF', // 蓝色
        '#FFFF00', // 黄色
        '#FF00FF', // 紫色
        '#00FFFF', // 青色
        '#FFA500', // 橙色
        '#FFC0CB', // 粉色
      ];

      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex];

      // 清空画布
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // 绘制烟花
      interface Particles {
        x: number
        y: number
        dx: number
        dy: number
        size: number
        life: number
      }
      const particles: Particles[] = [];
      const particleCount = 100;
      const gravity = 0.02;

      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x,
          y,
          dx: (Math.random() - 0.5) * 5,
          dy: (Math.random() - 0.5) * 5,
          size: Math.random() * 3 + 1, // 调整圆点的半径大小
          life: 80, // 控制烟花的生命周期
        });
      }

      fireworks.push({ x, y });

      function animate() {
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        fireworks.forEach(() => {
          const remainingParticles: typeof particles = [];

          particles.forEach((item) => {
            const p = item;
            p.x += p.dx;
            p.y += p.dy;
            p.dy += gravity;
            p.life -= 1;

            if (p.life > 0) {
              remainingParticles.push(p);
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
              const context = ctx;
              context.fillStyle = color;
              ctx.fill();
              ctx.closePath();
            }
          });

          particles.splice(0);
          particles.push(...remainingParticles);
        });

        // fireworks.splice(
        //   0,
        //   fireworks.length,
        //   ...fireworks.filter((firework) => fireworks.indexOf(firework) !== 0),
        // );

        if (fireworks.length > 0) {
          requestAnimationFrame(animate);
        }
      }

      if (fireworks.length === 1) {
        animate();
      }
    }

    // 初始化 Canvas
    function initCanvas() {
      if (canvasRef.value) {
        const ctx = canvasRef.value.getContext('2d');
        if (ctx) {
          // 每隔5秒绽放一次烟花
          setInterval(() => {
            const x = Math.random() * 400;
            const y = Math.random() * 400;
            explodeFirework(ctx, x, y);
          }, 5000);
        }
      }
    }

    onMounted(() => {
      initCanvas();
    });

    return { canvasRef };
  },
});
</script>

<style lang="scss" scoped>
canvas {
  background-color: black;
}
</style>
