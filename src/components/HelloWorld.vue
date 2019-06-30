<template>
  <div class="hello">
    <b-container>
      <h1>{{ msg }}</h1>
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
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      fields: [
        'No', 'Title', 'Episorde', {
          key: 'Watched',
          label: 'Download'
        }
      ],
      items: [
        {'No': 1, 'Title': 'flower', 'Episorde': 'ハーブ園でビール', 'Watched': true, 'path': '/videos/580042174.026765.mp4'},
        {'No': 2, 'Title': 'dish', 'Episorde': 'ハーブ園', 'Watched': false, 'path': '/videos/720p.mp4'},
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
h3 {
  margin: 40px 0 0;
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
a:link { 
  color: #ffffff;
}
</style>
