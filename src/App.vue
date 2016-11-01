<template lang="pug">
  #app.app
    //canvas.canvas#canvas
    .bg
    router-view.router-view(
      v-on:musicPlay="onMusicPlay"
      v-on:musicStop="onMusicStop"
      v-on:musicToggle="onMusicToggle"
      )
</template>

<script>
  import debounce from 'throttle-debounce/debounce';


  const THROTTLING = 3;
  
  const PLAYLIST = [
    'Slow_Moses_-_Slow_Moses.mp3',
    'Slow_Moses_-_Ancient_Licks.mp3',
    'Slow_Moses_-_How_to_Fake_Good_Endings.mp3'
  ];

  export default {
    name: "App",

    data: function () {
      return {
        canvas: null,
        context: null,
        toggle: 0,

        imgData: null,
        
        music: null,
        currentSong: 0
      }
    },

    mounted: function() {
      this.music = new Audio('assets/music/' + PLAYLIST[0]);
      
      this.music.addEventListener('ended', () => {
        this.currentSong++;
        if (this.currentSong >= PLAYLIST.length)
          this.currentSong = 0;
        
        this.music.pause();
        this.music = new Audio('assets/music/' + PLAYLIST[this.currentSong]);
        this.music.play();
      });
      
      return;
      
      this.canvas = document.getElementById('canvas');
      this.context = this.canvas.getContext('2d');

      this.onResize();
      window.addEventListener('resize', this.onResize);

      this.loop();
    },

    methods: {
      onMusicPlay: function () {
        this.music.play();
      },
      onMusicStop: function () {
        this.music.pause();
      },
      onMusicToggle: function () {
        if (this.music.paused)
          this.music.play();
        else
          this.music.pause();
      },
      
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
  @import url('https://fonts.googleapis.com/css?family=Exo+2:300,400,500');
  @font-face {
  	font-family: 'Verveine Regular';
  	src: url('~assets/fonts/VerveineW01-Regular.eot');
  	src: url('~assets/fonts/VerveineW01-Regular.eot?#iefix') format('embedded-opentype'),
  		url('~assets/fonts/VerveineW01-Regular.woff') format('woff'),
  		url('~assets/fonts/VerveineW01-Regular.ttf') format('truetype');
  	font-weight: normal;
  	font-style: normal;
  }
  
  body {
    overflow-y: hidden;
  }

  .app {
    height: 100%;
    width: 100%;

    // min-height: 650px;

    .canvas, .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    .bg {
      background: url('~assets/images/main-200.gif') repeat 0 0;
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
    /*font-family: 'Exo 2', sans-serif*/
    font-family: 'Verveine Regular', sans-serif
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
