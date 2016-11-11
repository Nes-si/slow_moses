<template lang="pug">
  #app.app
    .bg
    transition(name="cover")
      .bg-cover(v-show="routing")
    transition(name="main")
      router-view.router-view(
        v-on:musicPlay="onMusicPlay"
        v-on:musicStop="onMusicStop"
        v-on:musicToggle="onMusicToggle"
        v-bind:tourData="tourData"
        )
</template>

<script>
  import 'whatwg-fetch';
  
  
  export default {
    name: "App",

    data: function () {
      return {
        music: null,
        playlist: [],
        currentSong: 0,
        
        tourData: [],
        
        routing: false
      }
    },

    mounted: function () {
      fetch('config/music.json')
        .then(response => response.json())
        .then(json => {
          if (json.playlist) {
            this.playlist = json.playlist;
            this.musicInit();
          }
        })
        .catch(ex => {
          console.log('parsing music.json failed!', ex)
        });
      
      fetch('config/tour.json')
        .then(response => response.json())
        .then(json => {
          if (json.tour)
            this.tourData = json.tour;
        })
        .catch(ex => {
          console.log('parsing tour.json failed!', ex)
        });
    },

    methods: {
      musicInit: function () {
        this.music = new Audio('assets/music/' + this.playlist[0]);
  
        this.music.addEventListener('ended', () => {
          this.currentSong++;
          if (this.currentSong >= this.playlist.length)
            this.currentSong = 0;
    
          this.music.pause();
          this.music = new Audio('assets/music/' + this.playlist[this.currentSong]);
          this.music.play();
        });
      },
      onMusicPlay: function () {
        if (this.music)
          this.music.play();
      },
      onMusicStop: function () {
        if (this.music)
          this.music.pause();
      },
      onMusicToggle: function () {
        if (!this.music)
          return;
        if (this.music.paused)
          this.music.play();
        else
          this.music.pause();
      }
    },
  
    watch: {
      '$route' (to, from) {
        this.routing = true;
        setTimeout(() => this.routing = false, 500);
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
    background: #37254C;
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

    .bg, .bg-cover, .router-view {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    .bg {
      z-index: -2;
      background: url('~assets/images/main-200.gif') repeat 0 0;
    }
    
    .bg-cover {
      z-index: -1;
      background: #121213;
      opacity: .5;
    }
    
    .router-view {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  
    .main-enter-active, .main-leave-active {
      transition: opacity .5s ease-in;
    }
    .main-enter, .main-leave-active {
      opacity: 0.01;
    }
  
    .cover-enter-active, .cover-leave-active {
      transition: opacity .5s ease;
    }
    .cover-enter, .cover-leave-active {
      opacity: 0.01;
    }
  }

  
</style>
