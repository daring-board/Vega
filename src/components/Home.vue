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
        {'Episorde': '前撮り＠相楽園', 'Watched': false, 'path': '/videos/maedori.mp4'},
      ]
    }
  },
  mounted(){
    this.items.forEach(element => {
      var count = localStorage.getItem(element['Title'])
      /* eslint-disable */ 
      console.log(count)
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
