<template>
  <div class="page articlepost">
    <div class="content articlepost" id="thisarticle"></div>
    </div>
</template>

<script>
import db from '@/fb'
import { markdown } from 'markdown'
export default {
  data () {
    return {
      id: this.$route.params.id,
      article: {
        title: 'No Such article Exists',
        content:
          "<p> Sorry, but the article you're looking for does not exist.</p>",
        date: null
      }
    }
  },
  methods: {},
  mounted () {
    const article = document.getElementById('thisarticle')

    function renderArticle (doc) {
      if (doc.title !== undefined) {
        const content = document.createElement('div')
        content.setAttribute('class', 'articleContent')
        const title = document.createElement('h1')
        const image = document.createElement('img')
        image.setAttribute('src', doc.image)
        image.setAttribute('class', 'articleImage')
        title.setAttribute('class', 'articleTitleTxt')
        title.innerText = doc.title
        content.innerHTML = markdown.toHTML(doc.content)
        article.append(image)
        article.append(title)
        article.append(content)
      }
    }

    db.collection('article')
      .doc(this.id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('article retrieved')
          console.log(doc.data())
          renderArticle(doc.data())
        } else {
          console.log('No such document!')
        }
        renderArticle(doc)
      })
  }
}
</script>

<style>


:root {
  --blue:#0f49b4;
  --red: #B82929;
  --green: #1D8F2E;
  --StandardTextColor: rgba(255, 255, 255, 0.800);
}

.articleContent {
  padding-top: 400px;
  width: 100%;
  text-align: left;
}

.articleTitleTxt1 {
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 10px;
}

.articleTitleTxt {
  color: rgba(255, 255, 255);
  text-shadow: 0px 0px 8px rgb(0, 0, 0);
  width: calc(100% - 20px);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 80px;
  left: 0px;
  height: 400px;
  background: rgba(0, 0, 0, 0.5);
  margin: 0px 0px 0px 0px;
  z-index: 2;
  padding: 0px 10px 0px 10px;
  text-align: center;
}

.articleContent h1 {
  font-size: 24px;
  font-weight: 700;
  text-decoration: underline var(--green);
  padding-top: 30px;
}

.articleContent h2 {
  font-size: 20px;
  font-weight: 700;
}

.articleContent p {
  font-size: 18px;
  font-weight: 100;
  line-height: 28px;
}

.articleContent li {
  font-size: 18px;
  font-weight: 300;
  line-height: 36px;
}

.articleImage1 {
  position: absolute;
  top: 160px;
  max-width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.articleImage {
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 480px;
  object-fit: cover;
  z-index: 1;
}

.articleContent{
  animation:
    rideup 2.2s ease,
    noshow 1.8s ease-in;
}

.articleTitleTxt{
  animation:
    showpic 1.5s;
}

.articleContent h1{
  animation:
    underlineTransition 2s ease-in;
}

@keyframes underlineTransition {
  from{
    text-decoration:underline transparent;
  }
}

@keyframes noshow {
  from{
    color: transparent;
  }
}

@keyframes rideup {
  from{
    padding-top: 500px;
  }
}

/* The typewriter cursor effect */
@keyframes showpic {
  from{ 
    background: rgba(19, 19, 19); 
  }
  to {
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
