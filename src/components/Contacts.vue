<template lang="pug">
  .contacts
    .bg

    router-link.cross(to="/") 

    .contacts-inner
      .contacts-item.contacts-main
        .title(data-text="CONTACT")
          | CONTACT

        .label
          | David Moroney

        a.label.label-mail(href="mailto:slowmoses@gmail.com")
          .mail 
          | SLOWMOSES@GMAIL.COM

      .contacts-item.contacts-social
        .title(data-text="CONNECT")
          | CONNECT

        .socials
          a.ig(href="https://www.instagram.com/slowmoses/" target="_blank") 
          a.fb(href="https://www.facebook.com/SlowMoses/" target="_blank") 

      .contacts-item.contacts-listen
        .title(data-text="LISTEN")
          | LISTEN

        .listen
          a.itunes(href="https://itunes.apple.com/us/artist/slow-moses" target="_blank") 
          a.spotify(href="https://itunes.apple.com/us/artist/slow-moses" target="_blank") 
          a.soundcloud(href="https://soundcloud.com/wooden-indian" target="_blank") 
</template>
<script>
  export default {
    name: "ContactsComponent"
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .contacts {
    position: absolute;
    z-index: 100;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    overflow: hidden;

    padding: 50px 0 0;

    .bg {
      // background: #37254C;
      background: #121213;
      opacity: 0.9;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .cross {
      font-family: 'FontAwesome';
      font-size: 24px;
      color: rgba(250,204,130,0.70);
      letter-spacing: 0px;
      z-index: 1;
      padding-bottom: 20px;
    }

    .title {
      font-size: 24px;
      color: #FACD82;
      letter-spacing: 0px;
      text-shadow: 0px 0px 10px #FACD82;

      position: relative;
      cursor: pointer;
    }

    @keyframes noise-anim-1 {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i * (1 / $steps))} {
          clip: rect(random(100) + px, 9999px, random(100) + px, 0);
        }
      }
    }
    @keyframes noise-anim-1_2 {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i * (1 / $steps))} {
          clip: rect(random(100) + px, 9999px, random(100) + px, 0);
        }
      }
    }
    @keyframes noise-anim-2 {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i * (1 / $steps))} {
          clip: rect(random(100) + px, 9999px, random(100) + px, 0);
        }
      }
    }
    @keyframes noise-anim-2_2 {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i * (1 / $steps))} {
          clip: rect(random(100) + px, 9999px, random(100) + px, 0);
        }
      }
    }
    @keyframes noise-anim-3 {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i * (1 / $steps))} {
          clip: rect(random(100) + px, 9999px, random(100) + px, 0);
        }
      }
    }
    @keyframes noise-anim-3_2 {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i * (1 / $steps))} {
          clip: rect(random(100) + px, 9999px, random(100) + px, 0);
        }
      }
    }

    .title:after {
      content: attr(data-text);
      position: absolute;
      left: 2px;
      text-shadow: -1px 0 red;
      top: 0;
      color: white;
      background: url('~assets/images/noise-bg.png') no-repeat center center / auto;
      overflow: hidden;
      clip: rect(0, 900px, 0, 0);
      animation: noise-anim-1 2s infinite linear alternate-reverse;
    }

    .title:before {
      content: attr(data-text);
      position: absolute;
      left: -2px;
      text-shadow: 1px 0 blue;
      top: 0;
      color: white;
      background: url('~assets/images/noise-bg.png') no-repeat center center / auto;
      overflow: hidden;
      clip: rect(0, 900px, 0, 0);
      animation: noise-anim-1_2 3s infinite linear alternate-reverse;
    }

    .contacts-social .title:after {
      animation: noise-anim-2 2s infinite linear alternate-reverse;
    }

    .contacts-social .title:before {
      animation: noise-anim-2_2 2s infinite linear alternate-reverse;
    }

    .contacts-listen .title:after {
      animation: noise-anim-3 2s infinite linear alternate-reverse;
    }

    .contacts-listen .title:before {
      animation: noise-anim-3_2 2s infinite linear alternate-reverse;
    }


    &-inner {
      position: relative;
      z-index: 25;
      width: 100%;

      text-align: center;
      overflow-y: scroll;

      &::-webkit-scrollbar { display: none; }
    }

    &-item {
      margin-top: 54px;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      &:last-child {
        margin-bottom: 50px;
      }
    }

    .label {
      font-size: 16px;
      color: rgba(250,204,130,0.70);
      letter-spacing: 0;
      margin-top: 14px;
    }

    .label-mail {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      line-height: 19px;
    }

    .mail {
      font-family: 'FontAwesome';
      font-size: 16px;
      color: rgba(250,204,130,0.70);
      letter-spacing: 0;
      margin-right: 17px;
    }

    .socials,
    .listen {
      margin-top: 25px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      width: 100px;
    }

    .listen {
      width: 200px;
    }

    .ig,
    .fb,
    .itunes,
    .spotify {
      font-family: 'FontAwesome';
      font-size: 24px;
      color: rgba(250,204,130,0.70);
      letter-spacing: 0;
    }

    .soundcloud {
      font-family: 'FontAwesome';
      font-size: 30px;
      color: #FACD82;
      letter-spacing: 0;
    }

    .ig,
    .fb,
    .itunes,
    .spotify,
    .soundcloud {
      transition: text-shadow 0.2s ease;
      will-change: text-shadow;

      &:hover {
        text-shadow: 0 0 10px #FACD82;
      }
    }
  }
</style>
