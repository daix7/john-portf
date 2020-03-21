<template>
  <!-- <v-container> -->

  <div class="l-constrained-large">
    <header class="portfolio-wrap">
      <h1 class="portfolio-title">Portfolio</h1>
    </header>
    <div class="section-body">
      <div class="section-content clearfix">
        <div class="portfolio-content pull-left">
          <div>
            <h2 class="title-2">Schedule</h2>
            <p class="content">
              複数のクラスを持つ教員向けに授業管理アプリを作りました。
              <br />学生向けの時間割アプリは多いが教員向けがあまりなく、
              <br />実際に高校の教員などに要件を聞きながら開発しました。
            </p>
          </div>
          <div>
            <h2 class="title-2">使用した技術</h2>
            <img class="v-img" src="/assets/logo.png" />
            <img class="v-img" src="/assets/vuetify.png" />
            <img class="v-img2" src="/assets/Go.png" />
            <img class="v-img2" src="/assets/docker_logo.png" />
          </div>
        </div>
        <div class="schedule-img pull-left">
          <img src="/assets/Schedule2.png" />
        </div>
      </div>

      <div class="section-content-second clearfix">
        <div class="pull-left">
          <img class="miyako-img" src="/assets/miyako.png" />
        </div>
        <div class="portfolio-content-second pull-left">
          <div>
            <h2 class="title-3">宮古島方言辞書アプリ</h2>
            <p>
              地元の方言を多くの人に知ってもらいたいと思い授業の一環で作りました。
              <br />宮古島方言を約120語収録している辞書アプリです。
              <br />マンガで使い方を見ることができるので、とっても分かりやすいです。
              <br />
            </p>
          </div>
          <div>
            <h2 class="title-2">使用した技術</h2>
            <img class="v-img3" src="/assets/html_logo2.png" />
            <img class="v-img4" src="/assets/monaca.png" />
          </div>
        </div>
      </div>

      <div class="section-content-Third clearfix">
        <div class="portfolio-content-Third pull-left">
          <div>
            <h2 class="title-2">OnlineBoard</h2>
            <p class="content">
              <br />ゲームの戦略を練るときにオンライン上でチームメンバーと
              <br />マップを共有して、より簡単に作戦会議などが行える事を目的に
              <br />現在フロントエンドに携わっており制作している段階です。
            </p>
          </div>
          <div>
            <h2 class="title-2">使用している技術</h2>
            <img class="v-img" src="/assets/logo.png" />
            <img class="v-img" src="/assets/vuetify.png" />
            <img class="v-img2" src="/assets/docker_logo.png" />
            <img class="v-img" src="/assets/circleci.png" />
            <img class="v-img2" src="/assets/socket.jpg" />
          </div>
        </div>
        <div class="Strategy-img pull-left">
          <img src="/assets/StrategyBoard.jpg" />
        </div>
      </div>
    </div>
  </div>
  <!-- </v-container> -->
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    texta: function() {
      alert("hehehhehehhe");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, */
/* h2 {
  font-weight: normal;
} */

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  /* max-width: 200px; */
  max-width: 100%;
  /* margin-left: auto; */
  /* margin-left: 100%; */
}
.title {
  background: linear-gradient(270deg, #2f80ed 0, #56ccf2);
  padding: 20vh 0;
  text-align: center;
  font-size: 25px;

  /* height: 50px; */
}

.title-msg {
  color: white;
  border-bottom: 1px solid #fff;
  margin-top: 50px;
  margin-bottom: 150px;
}
.schedule-img {
  /* max-width: 200px; */
  /* float: left; */
  width: 200px;
  margin-top: 20px;
  /* margin-left: 30%; */
}

.Strategy-img {
  width: 250px;
  margin-top: 40px;
  margin-left: 0px;
}

.miyako-img {
  width: 180px;
  margin-top: 40px;
  margin-left: 20px;
}
.title-2 {
  font-size: 30px;
  margin-top: 30px;
}

.title-3 {
  font-size: 28px;
}

.section-body {
  margin-left: 20px;
}

.section-content h1 {
  font-size: 36px;
  padding: 8px 0px 24px 0px;
  /* margin-top: 80px; */
}

.section-content-second {
  /* font-size: 36px; */
  padding: 8px 0px 24px 0px;
  margin-top: 80px;
  margin-bottom: 30px;
}

.section-content-Third {
  margin-bottom: 40px;
  width: 1000px;
}

.subsection {
  margin-bottom: 32px;
}
.portfolio-content {
  width: 70%;
  margin-left: 20px;
  text-align: left;
  padding: 0px 8px;
  line-height: 180%;
}

.portfolio-content-second {
  width: 70%;
  margin-top: 30px;
  margin-left: 60px;
  text-align: left;
  padding: 0px 0px 0px 90px;
  line-height: 180%;
}

.portfolio-content-Third {
  width: 63%;
  /* margin-left: 20px; */
  text-align: left;
  /* padding: 0px 8px; */
  line-height: 180%;
}

.miyako-content {
  width: 60%;
  margin-left: 20px;
  text-align: left;
  padding: 0px 8px;
  line-height: 180%;
}

.pull-left {
  float: left;
  box-sizing: border-box;
}

.l-constrained-large {
  width: 940px;
  margin: 0 auto;
}
.v-img {
  width: 100px;
  margin-left: 5px;
}

.v-img2 {
  width: 150px;
  margin-bottom: 20px;
  margin-left: 5px;
}

.v-img3 {
  width: 250px;
  margin-left: 5px;
}

.v-img4 {
  width: 200px;
  margin-bottom: 20px;
  margin-left: 5px;
}

.portfolio-wrap {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
  padding-bottom: 20px;
}

.portfolio-title {
  display: inline;
  font-weight: normal;
  font-size: 50px;
  padding-bottom: 20px;
  border-bottom: 2px solid #cccccc;
}

ul.menu-table {
  display: table;
  margin: 0 auto;
  margin-top: 80px;
}
li {
  font-size: 30px;
  color: white;
  cursor: pointer;
}

.content {
  margin-bottom: 30px;
}

.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
</style>