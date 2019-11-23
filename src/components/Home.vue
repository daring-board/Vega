<template>
  <div class="home">
    <b-container>
      <p>
        <b-button @click="clickARCamera">ARカメラ</b-button>
      </p>
      <b-table hover outlined :fields="fields" :items="items" head-variant="dark">
        <template slot="Watched" slot-scope="data">
          <b-button v-if='data.item.Watched'><a class="download" :href='data.item.path' download="">Download</a></b-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      fields: [
        'Episorde', {
          key: 'Watched',
          label: 'Download'
        }
      ],
      items: [
        {'name': 'maedori', 'Episorde': '挨拶', 'Watched': false, 'path': '/videos/greeting.mp4'},
        {'name': 'maedori', 'Episorde': '初デート', 'Watched': false, 'path': '/videos/ep_01.mp4'},
        {'name': 'maedori', 'Episorde': 'プロポーズ', 'Watched': false, 'path': '/videos/ep_02.mp4'},
        {'name': 'maedori', 'Episorde': '前撮り＠相楽園', 'Watched': false, 'path': '/videos/maedori480.mp4'},
        {'name': 'maedori', 'Episorde': '挨拶A', 'Watched': false, 'path': '/videos/greeting_A.mp4'},
        {'name': 'maedori', 'Episorde': '挨拶B', 'Watched': false, 'path': '/videos/greeting_B.mp4'},
        {'name': 'maedori', 'Episorde': '挨拶C', 'Watched': false, 'path': '/videos/greeting_C.mp4'},
        {'name': 'maedori', 'Episorde': '挨拶D', 'Watched': false, 'path': '/videos/greeting_D.mp4'},
        {'name': 'maedori', 'Episorde': '挨拶E', 'Watched': false, 'path': '/videos/greeting_E.mp4'},
        {'name': 'maedori', 'Episorde': '挨拶F', 'Watched': false, 'path': '/videos/greeting_F.mp4'},
        {'name': 'maedori', 'Episorde': '挨拶G', 'Watched': false, 'path': '/videos/greeting_G.mp4'},
        {'name': 'maedori', 'Episorde': '挨拶H', 'Watched': false, 'path': '/videos/greeting_H.mp4'},
        {'name': 'maedori', 'Episorde': '数学クイズ', 'Watched': false, 'path': '/videos/mathQuiz.mp4'},
        {'name': 'maedori', 'Episorde': '一問一答', 'Watched': false, 'path': '/videos/oneQoneA.mp4'},
      ]
    }
  },
  mounted(){
    var ua = window.navigator.userAgent.toLowerCase();
    console.log(ua)
    if(ua.indexOf("android") !== -1) {
      console.log("「Android」をお使いですね!")
      if(ua.indexOf("chrome") !== -1 || ua.indexOf("crios") !== -1) {
        console.log("「Google Chrome」をお使いですね!");
      } else {
        console.log("Google Chromeで開く")
        window.href="intent://vega-58229.web.app#Intent;scheme=http;action=android.intent.action.VIEW;package=com.android.chrome;end"
      }
    } else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
      console.log("「iOS」をお使いですね!")
    } else if(ua.indexOf("windows nt") !== -1) {
      console.log("「Microsoft Windows」をお使いですね!")
    } else {
      console.log("OSが不明です")
    }

    this.items.forEach(element => {
      var count = localStorage.getItem(element['name'])
      /* eslint-disable */ 
      console.log(localStorage)
      element['Watched'] = (count > 0)
    });
  },
  methods: {
    clickARCamera(){
      window.location = "./markerless.html"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
a:link { 
  color: #ffffff;
}
</style>
