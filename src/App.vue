<template lang="pug">
  #app.app
    canvas.canvas#canvas
    router-view.router-view
</template>

<script>
  import debounce from 'throttle-debounce/debounce';


  const THROTTLING = 3;

  export default {
    name: "App",

    data: function () {
      return {
        canvas: null,
        context: null,
        toggle: 0,

        imgData: null
      }
    },

    mounted: function() {
      this.canvas = document.getElementById('canvas');
      this.context = this.canvas.getContext('2d');

      this.onResize();
      window.addEventListener('resize', this.onResize);

      this.loop();
    },

    methods: {
      onResize: function () {
        debounce(300, true, () => {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;

          this.imgData = this.context.createImageData(this.canvas.width, this.canvas.height);
        })();
      },

      noise: function () {
        let buffer32 = new Uint32Array(this.imgData.data.buffer);
        for (let i = 0; i < buffer32.length;)
          buffer32[i++] = (255 * Math.random()) << 24;
        this.context.putImageData(this.imgData, 0, 0);
      },

      loop: function () {
        if (!this.toggle)
          this.noise();
        this.toggle++;
        if (this.toggle >= THROTTLING)
          this.toggle = 0;
        requestAnimationFrame(this.loop);
      }
    }
  }
</script>

<style>
  @import 'normalize.css';
</style>

<style lang="scss" rel="stylesheet/scss">
  .app {
    .canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
</style>

<style lang="sss" rel="stylesheet/sass">
  .container
    display: flex
    flex-flow: column nowrap
    align-items: center

    max-width: 1200px
    padding: 0 30px
    margin: 0 auto

  *
    box-sizing: border-box

  html
    background: #fff
    height: 100%

  body
    -webkit-font-smoothing: antialiased
    font-family: 'Open Sans Hebrew Condensed', sans-serif
    height: 100%

  textarea
    line-height: 1.6
    resize: vertical

  a
    outline: none
    text-decoration: none

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

  input[type=checkbox],
  input[type=radio]
    opacity: 0
    position: absolute
    z-index: 12
    width: 18px
    height: 18px
    cursor: pointer

  input[type=checkbox]:checked,
  input[type=radio]:checked,
  input[type=checkbox]:focus,
  input[type=radio]:focus
    outline: none !important
</style>
