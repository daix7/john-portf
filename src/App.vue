<template>
  <div id="app">
    <div>
      <div class="title">
        <h1 class="title-msg">{{ msg }}</h1>
        <ul class="menu-table">
          <li v-on:click="home">HOME</li>
          <li v-on:click="portfolio">Portfolio</li>
          <li v-on:click="hobby">Hobby</li>
          <li></li>
        </ul>
      </div>
      <router-view></router-view>
      <footer class="top-footer"></footer>
    </div>
  </div>
</template>

<script>
import router from "./router";

export default {
  name: "App",
  data() {
    return {
      msg: "Wellcom to Daisuke Portfolio"
    };
  },
  methods: {
    home() {
      router.push({
        path: "/",
      });
    },
    portfolio() {
      router.push({
        path: "/portfolio",
      });
    },
    hobby() {
      router.push({
        path: "/hobby",
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

}
/* <style scoped> */
h1,
h2 {
  font-weight: normal;
}

body {
  min-width: 1150px;
}

@media screen and ( max-width: 768px) {
  body {
    min-width: auto;
  }
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
  padding-bottom: 90px;
  text-align: center;
  font-size: 25px;

  /* height: 50px; */
}

.title-msg {
  color: white;
  margin-top: 50px;
  margin-bottom: 150px;
}

ul.menu-table {
  display: table;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 5px;
}
li {
  font-size: 30px;
  color: white;
  cursor: pointer;
}

.top-footer {
  background: linear-gradient(270deg, #2f80ed 0, #56ccf2);
  padding: 4vh 0;
}
</style>
