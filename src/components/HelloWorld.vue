<template>
  <!-- <v-container> -->

  <div class="l-constrained-large">
    <header class="profile-wrap">
      <h1 class="profile-title">Profile</h1>
    </header>
    <div class="section-content cleafix">
      <div class="profile-img pull-left">
        <img src="/img/dai2.png" />
      </div>
      <div class="profile-content pull-left">
        <div>
          <h2 class="title-2">自己紹介</h2>
          <p>
            初めまして。私は益田大輔と申します。
            <br />高校生の頃からプログラミングを始め、アプリケーションなどを作っています。
            <br />言語は主にjavascriptを使用することが多く、Vue.jsというフレームワークを使い
            <br />webアプリを作ることが好きです。
          </p>
        </div>
        <div>
          <h2 class="home-title">使用したことのある技術・ソフトウェア</h2>
          <img class="v-img" src="/img/logo.png" />
          <img class="v-img" src="/img/vuetify.png" />
          <img class="v-img" src="/img/vim-logo.png" />
          <img class="v-img" src="/img/node.js.png" />
          <img class="v-img" src="/img/java.png" />
          <img class="v-img3" src="/img/html_logo2.png" />
          <img class="v-img2" src="/img/php.png" />
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
h1,
h2 {
  font-weight: normal;
}

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
.profile-img {
  /* max-width: 200px; */
  /* float: left; */
  width: 200px;
  /* margin-left: 30%; */
}
.title-2 {
  margin-bottom: 20px;
  margin-right: 65%;
}

.home-title {
  margin-top: 20px;
  margin-bottom: 20px;
}

.section-content h1 {
  font-size: 36px;
  padding: 8px 0px 24px 0px;
}

.cleafix::after {
  content: "";
  display: block;
  clear: both;
}

.subsection {
  margin-bottom: 32px;
}
.profile-content {
  width: 72%;
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
  margin-bottom: 40px;
}
.v-img {
  width: 100px;
  margin-left: 5px;
}

.v-img2 {
  width: 120px;
  margin-bottom: 10px;
  margin-left: 5px;
}

.v-img3 {
  width: 250px;
  margin-left: 5px;
}

.profile-wrap {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
  padding-bottom: 20px;
}

.profile-title {
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
</style>