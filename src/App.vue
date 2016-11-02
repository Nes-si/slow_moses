<template lang="pug">
  #app.app
    .bg
    router-view.router-view(
      v-on:musicPlay="onMusicPlay"
      v-on:musicStop="onMusicStop"
      v-on:musicToggle="onMusicToggle"
      )
</template>

<script>
  const PLAYLIST = [
    'Slow_Moses_-_Slow_Moses.mp3',
    'Slow_Moses_-_Ancient_Licks.mp3',
    'Slow_Moses_-_How_to_Fake_Good_Endings.mp3'
  ];

  export default {
    name: "App",

    data: function () {
      return {
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
      }
    }
  }
</script>

<style>
  @import 'normalize.css';
</style>

<style lang="scss" rel="stylesheet/scss">
  @font-face {
    font-family: 'Verveine Regular';
    src: url('~assets/fonts/VerveineW01-Regular.eot');
    src: url('~assets/fonts/VerveineW01-Regular.eot?#iefix') format('embedded-opentype'),
      url('~assets/fonts/VerveineW01-Regular.woff') format('woff'),
      url('~assets/fonts/VerveineW01-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
  }

  * {
    box-sizing: border-box;
  }

  html {
    background: #fff;
    height: 100%;
  }

  body {
    font-family: 'Verveine Regular', sans-serif;
    height: 100%;
    overflow-y: hidden;
    -webkit-font-smoothing: antialiased;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=checkbox],
  input[type=radio] {
    opacity: 0;
    position: absolute;
    z-index: 12;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  input[type=checkbox]:checked,
  input[type=radio]:checked,
  input[type=checkbox]:focus,
  input[type=radio]:focus {
    outline: none !important;
  }
</style>

<style lang="scss" scoped rel="stylesheet/scss">
  .app {
    height: 100%;
    width: 100%;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: url('~assets/images/main-200.gif') repeat 0 0;
    }
  }
</style>
