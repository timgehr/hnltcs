<template>
  <div class="snippet-big fullsnip">
    <div class="snippet-big left"></div>
    <div class="snippet-big stuff">
      <router-link class="snippet-big title" :to="this.article.id">{{
        this.article.title
      }}</router-link>
      <div class="snippet-big content">
        <img class="snippet-big image" :src="this.article.image" />
        <div class="snippet-big articlecontent" style="overflow: hidden">
          {{ article.content.split(" ").splice(0, 50).join(" ") }}...
        </div>
      </div>
      <h3 class="snippet-big date">Posted on {{ this.article.date }}</h3>
      <p class="snippet-big tags">
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
  },
};
</script>

<style>
.snippet-big.fullsnip {
  min-height: 300px;
  height: fit-content;
  width: 100%;
  margin-top: 30x;
  margin-bottom: 30px;
  text-align: left;
  display: flex;
  flex-direction: row;
}

.snippet-big.image {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.snippet-big.title {
  font-size: 35px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.911);
  text-decoration: none;
}

.snippet-big.leftAndTitle {
  display: flex;
  flex-direction: row;
}

.snippet-big.left {
  animation-delay: 0.1s;
  background: #0f49b4;
}

.snippet-big:hover .left {
  min-width: 10px;
  margin-right: 10px;
}

.snippet-big.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
  padding: 20px 0px 10px 0px;
  margin: 0px;
  height: 200px;
}

.snippet-big.articlecontent {
  text-align: left;
  padding: 0px 10px 10px 50px;
  margin: 0px;
  height: 190px;
  font-size: 21px;
  font-weight: 300;
}

.snippet-big.date {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}

.snippet-big.tags {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
