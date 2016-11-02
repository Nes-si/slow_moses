<template lang="pug">
  .home
    transition
      .cssload(v-show="!isLoaded")
        .cssload-container
          .cssload-flex-container
            li
              span.cssload-loading

    .bg

    .cssload.cursor(v-show="cursorActive")
      .cssload-container
        .cssload-flex-container
          li
            span.cssload-loading

    transition
      .bg-home(v-show="isLoaded")
        .play(@click="onMusicToggle")
          | 
        img.bg-pic(src="~assets/images/bg.png" v-on:load="onBgLoaded")
        .noise
          video.gif(autoplay loop muted playsinline)
            source(src="/assets/videos/noise.mp4" type="video/mp4")
          img.jpeg(
            src="~assets/images/noise.jpg"
            @mouseover="onTVOver"
            @mouseout="onTVOut"
            @mousemove="onTVMove"
            v-bind:class="{'jpeg-invis': this.musicPlaying}"
            )


    .contact
      router-link(to="/contacts") 

    .listen
      a.spotify(href="https://open.spotify.com/artist/7LyEncFWbb2nOsbVcQqFQm")
        | 
      a.soundcloud(href="https://soundcloud.com/wooden-indian")
        | 
      a.itunes(href="https://itunes.apple.com/us/artist/slow-moses")
        | 

    .tour
      router-link(to="/tour") 

    .socials
      a.instagram(href="https://www.instagram.com/slowmoses/")
        | 

      a.facebook(href="https://www.facebook.com/SlowMoses/")
        | 


    .content
      transition
        .logo(v-show="isLoaded")


</template>
<script>
  import throttle from 'throttle-debounce/throttle';


  export default {
    name: "HomeComponent",

    data: function () {
      return {
        isLoaded: false,
        musicPlaying: false,

        cursor: null,
        cursorRect: null,
        cursorActive: false
      }
    },

    mounted: function () {
      let img = document.querySelector('.home .bg-pic');
      if (img.complete)
        this.isLoaded = true;

      this.cursor = document.querySelector('.home .cursor');
      this.cursorRect = this.cursor.getBoundingClientRect();
    },

    methods: {
      isIPad: function() {return navigator.userAgent.match(/iPad/i);},
      isIPhone: function() {return navigator.platform.match(/i(Phone|Pod)/i);},
      isAndroid: function() {return navigator.userAgent.match(/Android/i);},
      isGadget: function() {return this.isIPad() || this.isIPhone() || this.isAndroid();},

      onBgLoaded: function () {
        this.isLoaded = true;
      },

      onTVOver: function () {
        if (this.isGadget())
          return;

        this.cursorActive = true;
        setTimeout(() => this.cursorRect = this.cursor.getBoundingClientRect(), 50);

        this.$emit('musicPlay');
        this.musicPlaying = true;
      },
      onTVOut: function () {
        if (this.isGadget())
          return;

        this.cursorActive = false;

        this.$emit('musicStop');
        this.musicPlaying = false;
      },
      onTVMove: function (e) {
        throttle(100, () => {
          if (this.isGadget())
            return;

          let x = e.clientX - this.cursorRect.width/2;
          let y = e.clientY - this.cursorRect.height/2;
          this.cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        })();
      },

      onMusicToggle: function () {
        this.$emit('musicToggle');
        this.musicPlaying = !this.musicPlaying;
      }
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  .cssload {
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    pointer-events: none;
  }

  .cursor {
    transform: none;
    top: 0;
    left: 0;
    transition: transform .1s;
    will-change: transform;
  }

  .cssload-container {
    margin: 19px auto 0 auto;
    max-width: 545px;
  }

  .cssload-flex-container {
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      list-style: none;
      padding: 10px;
      height: 97px;
      width: 97px;
      margin: 29px 19px;
      position: relative;
      text-align: center;
    }
  }

  .cssload-loading, .cssload-loading:after, .cssload-loading:before {
    display: inline-block;
    position: relative;
    width: 4px;
    height: 38px;
    background: rgb(255,255,255);
    margin-top: 5px;
    border-radius: 975px;
    animation: cssload-upDown2 1.15s ease infinite;
    animation-direction: alternate;
    animation-delay: 0.29s;
  }
  .cssload-loading:after, .cssload-loading:before {
    position: absolute;
    content: '';
    animation: cssload-upDown 1.15s ease infinite;
    animation-direction: alternate;
  }
  .cssload-loading:before {
    left: -10px;
  }
  .cssload-loading:after {
    left: 10px;
    animation-delay: 0.58s;
  }

  @keyframes cssload-upDown {
    from {
      transform: translateY(19px);
    }
    to {
      transform: translateY(-19px);
    }
  }

  @keyframes cssload-upDown2 {
    from {
      transform: translateY(29px);
    }
    to {
      transform: translateY(-19px);
    }
  }

  .play {
    font-family: 'FontAwesome';
    font-size: 6vh;
    color: #FFFFFF;
    letter-spacing: 0px;
    text-shadow: 0px 0px 14px #FACD82;
    filter: drop-shadow(0px 0px 5px #FACD82) drop-shadow(0px 0px 7px #FACD82);
    cursor: pointer;
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);

    display: none;
    z-index: 9999;
  }
</style>
<style lang="scss" scoped rel="stylesheet/scss">
  .home {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;

    .bg {
      // background: #37254C;
      background: #302142;
      opacity: 0.9;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .content {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    }

    .contact,
    .tour,
    .socials,
    .listen {
      a {
        font-family: 'FontAwesome';
        font-size: 18px;
        color: #FACD82;
        letter-spacing: 0;
        text-shadow: 0 0 10px #FACD82;
      }

      z-index: 55;
      position: absolute;
    }

    .contact {
      left: 32px;
      top: 32px;
    }

    .tour {
      right: 32px;
      top: 32px;
    }

    .socials {
      bottom: 32px;
      right: 32px;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    .listen {
      bottom: 32px;
      left: 32px;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    .itunes,
    .soundcloud,
    .facebook {
      margin-top: 28px;
    }

    .itunes,
    .soundcloud,
    .facebook,
    .instagram,
    .spotify,
    .tour,
    .contact {
      transition: filter 0.3s ease;
      will-change: filter;

      &:hover  {
        filter: drop-shadow(0px 0px 7px #FACD82);
      }
    }

    .logo {
      margin-top: 6vh;

      background: url('~assets/images/logo.svg') no-repeat center center / contain;
      width: 27.25vw;
      height: 36.555555vh;
      position: relative;
      z-index: 99;
      filter: drop-shadow(0px 0px 5px #FACD82) drop-shadow(0px 0px 7px #FACD82) drop-shadow(0px 0px 12px #FACD82);
    }

    .bg-home {
      width: 1600px;
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, 0, 0);

      .bg-pic {
        position: absolute;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        pointer-events: none;
      }

      .noise {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 5;

        video,
        .jpeg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          height: 25%;
          cursor: none;
        }

        .jpeg-invis {
          opacity: .01;
        }
      }
    }


  }

  .v-enter-active, .v-leave-active {
    transition: opacity 1s
  }
  .v-enter, .v-leave-active {
    opacity: .01
  }

  @media (min-height: 900px) {
    .home {
      .logo {
        width: 56.77vw;
        height: 33.43vh;
      }
    }
  }

  @media (max-width: 768px) {
    .home {
      .play {
        display: block;
      }

      .logo {
        width: 56.77vw;
        height: 33.43vh;
      }

      .listen {
        display: none;
      }

      .socials {
        display: none;
      }
    }
  }

  @media (max-width: 425px) {
    .home {

      .logo {
        // padding: 0 50px;
        // width: 100%;
        // max-width: 268px;
        // height: 203px;

        width: 71.46vw;
        height: 32.37vh;

        margin-left: 10%;
        margin-right: 10%;
      }

      .contact,
      .tour {
        top: initial;
        left: 24px;
        bottom: 24px;
        filter: drop-shadow(0px 0px 7px #FACD82);
      }

      .tour {
        left: initial;
        right: 24px;
      }
    }
  }
</style>
