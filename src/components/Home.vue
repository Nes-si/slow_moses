<template lang="pug">
  .home
    .bg
  
    .contact
      router-link(to="/contacts") 

    .listen
      a.spotify(href="#")
        | 
      a.soundcloud(href="#")
        | 
      a.itunes(href="#")
        | 

    .tour
      router-link(to="/tour") 

    .socials
      a.instagram(href="#")
        | 

      a.facebook(href="#")
        | 

    .content
      .logo
</template>

<script>
  export default {
    name: "HomeComponent"
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  .home {
    .bg {
      background: #37254C;
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

    .logo {
      background: url('../images/logo.svg') no-repeat center center / contain;
      width: 436px;
      height: 329px;
      position: relative;
      z-index: 99;

      filter: drop-shadow(0px 0px 5px #FACD82) drop-shadow(0px 0px 7px #FACD82) drop-shadow(0px 0px 12px #FACD82);
    }

  }
</style>
