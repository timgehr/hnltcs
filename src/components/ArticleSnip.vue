<template>
  <div class="snippet fullsnip">
    <div class="snippet left" :style="style"></div>
    <div class="snippet stuff">
      <router-link class="snippet title" :to="this.article.id">{{
        this.article.title
      }}</router-link>
      <div class="snippet content">
        <img class="snippet image" :src="this.article.image" />
        <div class="snippet articlecontent" style="overflow: hidden">
          {{ article.content.split(" ").splice(0, 20).join(" ") }}...
        </div>
      </div>
      <h3 class="snippet date">Posted on {{ this.article.date }}</h3>
      <p class="snippet tags">
        Tags:
        <a v-for="tag in this.article.tags" :key="tag">{{ tag }}, </a>
      </p>
    </div>
  </div>
</template>

<script>
// import { markdown } from 'markdown'
export default {
  props: {
    article: Object,
    leftColor: String,
    animDelay: Number,
  },
  computed: {
    style() {
      return "background-color: " + this.leftColor + "animation-delay: " + this.animDelay.toString() + "s;";
    },
  },
};
</script>

<style>
.snippet.fullsnip {
  min-height: 100px;
  height: fit-content;
  width: 100%;
  margin-top: 30x;
  margin-bottom: 30px;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-flow: row nowrap; /* required */
}

.snippet.image {
  height: 100px;
  width: 200px;
  object-fit: cover;
}

.snippet.title {
  font-size: 25px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.911);
  text-decoration: none;
}

.snippet.leftAndTitle {
  display: flex;
  flex-direction: row;
}

.snippet:hover .left {
  min-width: 10px;
  margin-right: 10px;
}

.snippet.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
  padding: 20px 0px 10px 0px;
  margin: 0px;
}

.snippet.articlecontent {
  text-align: left;
  padding: 0px 10px 10px 50px;
  margin: 0px;
  height: fit-content;
  font-size: 21px;
  font-weight: 300;
}

.snippet.date {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}

.snippet.tags {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}

.stuff {
  box-sizing: border-box; /* required */
  width: 100%; /* required */
  flex: none; /* required */
}
</style>
