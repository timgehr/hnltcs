<template>
  <div class="nav">
    <router-link to="/" tag="div" id="homegroup">
      <svg class="logo60" width="60" height="60">
        <rect y="00" width="60" height="20" style="fill: #0f49b4" />
        <rect y="20" width="60" height="20" style="fill: #b82929" />
        <rect y="40" width="60" height="20" style="fill: #1d8f2e" />
      </svg>
      <span>HNLTCS</span>
    </router-link>
    <div class="navitself">
      <router-link id="nav1" to="/">Home</router-link>
      <router-link id="nav2" to="/articles">Articles</router-link>
      <router-link id="nav3" to="/about">About</router-link>
      <router-link id="nav4" to="/contribute">Contribute</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>


<style scoped>
.nav {
  text-align: center;
  font-family: "JetBrains Mono", monospace;
  font-style: normal;
  align-items: left;
  height: 80px;
  line-height: 80px;
  width: 100%;
  justify-content: center;
  background: #000000cc;
  /* #0f49b4
     #B82929 
     #1D8F2E
  */
  font-weight: 800;
  /* outline: 1.5px solid rgba(255, 255, 255, 0.089); */
  box-shadow: 0px 0px 0px #0000005e;
  display: flex;
  flex-direction: row;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  transition: 0.5s;
  z-index: 100;
}

.navitself{
  width: 100%;
  max-width: 1000px;
  text-align: right;
  padding-right: 30px;
}

#homegroup{
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 30px;
  transition: 0.5s;
  color: white;
}

#homegroup:hover{
  cursor: pointer;
}

.nav a {
  padding-left: 30px;
  padding-right: 30px;
  font-size: 20px;
  color: white;
  transition: 0.5s;
}

.nav a:hover {
  color:#0f49b4;
}

.nav a:link {
  text-decoration: none;
}

.logo60 {
  margin: 10px 20px 10px 0px;
  z-index: 100;
}
</style>
