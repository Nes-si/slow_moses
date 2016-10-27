<template lang="pug">
  .tour
    .bg
    router-link.cross(to="/") 
    .title(data-text="TOUR")
      | TOUR
    .tour-inner
      .table
        .table-item
          .table-date
            | Aug 28
          .table-name
            | MusicFestNW
          .table-location
            | Portland, Oregon
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Aug 30
          .table-name
            | Lagunitas
          .table-location
            | Petaluma, California
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Sept 1
          .table-name
            | MusicFestNW
          .table-location
            | Santa Monica, California
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Aug 28
          .table-name
            | MusicFestNW
          .table-location
            | Portland, Oregon
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Aug 30
          .table-name
            | Lagunitas
          .table-location
            | Petaluma, California
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Sept 1
          .table-name
            | MusicFestNW
          .table-location
            | Santa Monica, California
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Aug 28
          .table-name
            | MusicFestNW
          .table-location
            | Portland, Oregon
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Aug 30
          .table-name
            | Lagunitas
          .table-location
            | Petaluma, California
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Sept 1
          .table-name
            | MusicFestNW
          .table-location
            | Santa Monica, California
          .table-tickets
            | TICKETS
          .table-info
            | Info
        .table-item
          .table-date
            | Aug 28
          .table-name
            | MusicFestNW
          .table-location
            | Portland, Oregon
          .table-tickets
            | TICKETS
          .table-info
            | Info
</template>

<script>
  export default {
    name: "TourComponent"
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .tour {
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
      padding: 0px 0 40px;
    }

    .title {
      font-size: 24px;
      color: #FACD82;
      letter-spacing: 0px;
      text-shadow: 0px 0px 10px #FACD82;

      padding-bottom: 30px;

      position: relative;

      font-family: 'Verveine Regular', sans-serif;
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
      width: 100%;

      text-align: center;
      overflow-y: scroll;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      &::-webkit-scrollbar { display: none; }
    }

    .table {
      width: 70%;
      text-align: left;

      &-item {
        border-bottom: 1px rgba(250,205,130,0.2) solid;

        padding: 15px 0 23px 0;
        display: flex;
        flex-flow: row nowrap;
      }

      &-date {
        font-size: 16px;
        color: rgba(250,204,130,0.70);
        letter-spacing: 0px;
        flex: 1;
      }

      &-name {
        font-size: 16px;
        color: #FACD82;
        letter-spacing: 0px;
        flex: 1;
      }

      &-location {
        font-size: 16px;
        color: rgba(250,204,130,0.70);
        letter-spacing: 0px;
        flex: 1;
        text-align: left;
      }

      &-tickets,
      &-info {
        font-size: 14px;
        color: #FACD82;
        letter-spacing: 0px;
        flex: 1;
        text-align: right;
        text-transform: uppercase;
      }
    }
  }
</style>
