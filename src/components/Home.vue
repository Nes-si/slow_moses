<template lang="pug">
  .home
    .hidden(v-show="false")
      img(src="~images/bg.png" v-on:load="onBgLoaded")
  
    .bg
    transition
      .home-bg(v-show="isLoaded")
    transition
      .noise(v-show="isLoaded")
        img(src="~images/noise.gif")
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
  export default {
    name: "HomeComponent",
    
    data: function () {
      return {
        pageLoaded: false,
        bgLoaded: false
      }
    },
    
    computed: {
      isLoaded: function () {
        return this.pageLoaded && this.bgLoaded;
      }
    },
    
    mounted: function () {
      document.addEventListener('DOMContentLoaded', this.onLoaded);
    },
    
    methods: {
      onLoaded: function () {
        this.pageLoaded = true;
      },
      onBgLoaded: function () {
        console.log('bg loaded!');
        this.bgLoaded = true;
      }
    }
  }
</script>
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
        letter-spacing: 0px;
        text-shadow: 0px 0px 10px #FACD82;
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

      background: url('../images/logo.svg') no-repeat center center / contain;
      width: 27.25vw;
      height: 36.555555vh;
      position: relative;
      z-index: 99;
      filter: drop-shadow(0px 0px 5px #FACD82) drop-shadow(0px 0px 7px #FACD82) drop-shadow(0px 0px 12px #FACD82);
    }

    &-bg {
      background: url('../images/bg.png') no-repeat center center / contain;
      width: 1600px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate3d(-50%, 0, 0);

      z-index: 10;
    }

    .noise {
      position: absolute;
      top: 62.5vh;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 33vh;
      height: 25vh;

      z-index: 5;

      img {
        width: 100%;
        height: 100%;
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
