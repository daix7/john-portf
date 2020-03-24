<template>
  <!-- <v-container> -->

  <div class="l-constrained-large">
    <header class="hobby-wrap">
      <h1 class="hobby-title">Hobby</h1>
    </header>
    <div class="section-body">
      <div class="section-content clearfix">
        <div class="portfolio-content pull-left">
          <div>
            <h2 class="title-1">LINEbot</h2>
            <p class="content">
              <br />学校内で月に一回のスーツを着てくる日を忘れないよう
              <br />通知してくれたり、日にちを教えてくれるbotです。
            </p>
          </div>
          <div>
            <h2 class="title-2">使用した技術</h2>
            <img class="v-img" src="../img/node.js.png" />
            <img class="v-img" src="../img/messaging_api.png" />
          </div>
        </div>
        <div class="line-img pull-left">
          <img src="../img/line_bot.png" />
        </div>
      </div>

      <div class="section-content-second clearfix">
        <div class="pull-left alexa-img">
          <img src="../img/alexa.png" />
        </div>
        <div class="portfolio-content-second pull-left">
          <div>
            <h2 class="title-3">Alexa出勤管理BOT</h2>
            <p class="content-3">
              アレクサのスキル開発勉強中です。
              <br />まだ、企画段階で今後開発していく予定です。
              <br />
            </p>
          </div>
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
.title-1 {
  font-size: 28px;
}

.title-msg {
  color: white;
  border-bottom: 1px solid #fff;
  margin-top: 50px;
  margin-bottom: 150px;
}
.line-img {
  width: 200px;
  margin-top: 20px;
}

.alexa-img {
  width: 180px;
  margin-top: 40px;
  margin-left: 90px;
  padding-left: 40px;
}
.title-2 {
  font-size: 30px;
  margin-bottom: 20px;
}

.title-3 {
  font-size: 28px;
  margin-top: 60px;
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
  align-content: center;
}

.subsection {
  margin-bottom: 32px;
}
.portfolio-content {
  width: 50%;
  margin-left: 100px;
  text-align: left;
  padding: 0px 8px;
  line-height: 180%;
}

.portfolio-content-second {
  width: 60%;
  margin-left: 30px;
  text-align: left;
  padding: 0px 0px 0px 0px;
  line-height: 180%;
}

.pull-left {
  float: left;
  box-sizing: border-box;
}

.l-constrained-large {
  width: 940px;
  /* 940px */
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

.hobby-wrap {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
  padding-bottom: 20px;
}

.hobby-title {
  display: inline;
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

@media (max-width: 768px) {
  .l-constrained-large {
    width: 100%;
    /* 940px */
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 0 20px;
    align-items: center;
    box-sizing: border-box;
  }

  .section-body {
    margin-left: 0px;
  }

  .section-content {
    width: 100%;
    font-size: 14px;
    padding: 8px 0px 24px 0px;
    margin-top: 0 !important;
    display: flex;
    flex-direction: column;
  }

  .portfolio-content {
    width: 80%;
    margin-left: 0px;
    text-align: left;
    padding: 0px 8px;
    line-height: 180%;
  }

  .portfolio-content-second {
    width: 75%;
    margin-left: 0px;
    text-align: left;
    padding: 0px 0px 0px 0px;
    line-height: 180%;
    align-self: flex-end;
  }

  .section-content-second {
    /* font-size: 36px; */
    padding: 8px 0px 24px 0px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }

  .line-img {
    width: 200px;
    margin-top: 20px;
    align-self: flex-end;
  }

  .title-3 {
    font-size: 28px;
    margin-top: 0px;
  }

  .alexa-img {
    width: 130px;
    margin-top: 0px;
    margin-left: 0px;
    padding-left: 0px;
    text-align: left;
  }
  .content {
    margin-bottom: 0px;
    width: 190px;
  }
}
</style>