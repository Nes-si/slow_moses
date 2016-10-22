<template lang="pug">
  #app
    canvas.canvas#canvas
    .bg
    ul
      li
        a(href="/") Home
      li
        a(href="/contacts") Contacts
      li
        a(href="/tour") Tour

    .logo
</template>

<script>
export default {
  name: "Home",

  mounted: function() {
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.onresize = resize;

    function noise(ctx) {
        var w = ctx.canvas.width,
            h = ctx.canvas.height,
            idata = ctx.createImageData(w, h),
            buffer32 = new Uint32Array(idata.data.buffer),
            len = buffer32.length,
            i = 0;

        for(; i < len;)
            buffer32[i++] = ((255 * Math.random())|0) << 24;

        ctx.putImageData(idata, 0, 0);
    }

    var toggle = true;

    // added toggle to get 30 FPS instead of 60 FPS
    (function loop() {
        toggle = !toggle;
        if (toggle) {
            requestAnimationFrame(loop);
            return;
        }
        noise(ctx);
        requestAnimationFrame(loop);
    })();

    }
  }
</script>

<style>
  @import 'normalize.css';
</style>

<style lang="scss" rel="stylesheet/scss">
  ul {
    position: relative;
    z-index: 50;
  }

  .logo {
    background: url('images/logo.svg') no-repeat center center / contain;
    width: 436px;
    height: 329px;
    position: relative;
    z-index: 99;

    filter: drop-shadow(0px 0px 5px #FACD82) drop-shadow(0px 0px 7px #FACD82) drop-shadow(0px 0px 12px #FACD82);
  }

  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .bg {
    background: #131115;
    opacity: 0.9;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
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

<style lang="scss" scoped rel="stylesheet/scss">
</style>
