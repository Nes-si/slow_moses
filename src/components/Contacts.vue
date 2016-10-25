<template lang="pug">
  .contacts
    .bg
  
    router-link.cross(to="/") 

    .contacts-inner
      .contacts-item
        .title(data-text="CONTACT")
          | CONTACT

        .label
          | David Moroney

        .label.label-mail
          .mail 
          | SLOWMOSES@GMAIL.COM

      .contacts-item
        .title(data-text="CONNECT")
          | CONNECT

        .socials
          a.ig(href="#") 
          a.fb(href="#") 

      .contacts-item
        .title(data-text="LISTEN")
          | LISTEN

        .listen
          a.itunes(href="#") 
          a.spotify(href="#") 
          a.soundcloud(href="#") 


</template>

<script>
  export default {
    name: "ContactsComponent"
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
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

    padding: 50px 0;
  
    .bg {
      background: #28242A;
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
    }

    .title {
      font-size: 24px;
      color: #FACD82;
      letter-spacing: 0px;
      text-shadow: 0px 0px 10px #FACD82;

      position: relative;
      cursor: pointer;
    }

    @keyframes noise-anim{
      $steps:20;
      @for $i from 0 through $steps{
        #{percentage($i*(1/$steps))}{
          clip:rect(random(100)+px,9999px,random(100)+px,0);
        }
      }
    }

    @keyframes noise-anim-2{
      $steps:20;
      @for $i from 0 through $steps{
        #{percentage($i*(1/$steps))}{
          clip:rect(random(100)+px,9999px,random(100)+px,0);
        }
      }
    }

    .title:after {
      content:attr(data-text);
      position:absolute;
      left:2px;
      text-shadow:-1px 0 red;
      top:0;
      color:white;
      background:black;
      overflow:hidden;
      clip:rect(0,900px,0,0);
      animation:noise-anim 2s infinite linear alternate-reverse;
    }

    .title:before {
      content:attr(data-text);
      position:absolute;
      left:-2px;
      text-shadow:1px 0 blue;
      top:0;
      color:white;
      background:black;
      overflow:hidden;
      clip:rect(0,900px,0,0);
      animation:noise-anim-2 3s infinite linear alternate-reverse;
    }



    &-inner {
      position: relative;
      z-index: 25;
      width: 60%;

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
    }

    .label {
      font-size: 16px;
      color: rgba(250,204,130,0.70);
      letter-spacing: 0px;
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
      letter-spacing: 0px;
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
      letter-spacing: 0px;
    }

    .soundcloud {
      font-family: 'FontAwesome';
      font-size: 30px;
      color: #FACD82;
      letter-spacing: 0px;
    }

    .ig,
    .fb,
    .itunes,
    .spotify,
    .soundcloud {
      transition: text-shadow 0.2s ease;
      will-change: text-shadow;

      &:hover {
        text-shadow: 0px 0px 10px #FACD82;
      }
    }

  }
</style>
