<template>
  <div class="details-container">
    <button class="btn btn-warning" @click="backToSearch">Back to search</button>
    <div v-if="show">
      <h1 class="text-info">{{ show.name }}</h1>
      <div v-html="show.summary"></div>
      <div class="row">
        Genre:
        <ul>
          <li v-for="genre in show.genres" :key="genre">{{ genre }}</li>
        </ul>
      </div>
      <div class="season-container" v-for="season in seasons" :key="season.id">
        <Season :season="season" />
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import http from '@/services/http.js';
import Season from './Season.vue'
export default {
  data() {
    return {
      show: null,
      seasons: null
    }
  },
  components: {
    Season
  },
  methods: {
    backToSearch() {
      this.$router.push({ name: 'home' })
    }
  },
  async created() {
    let show = await http.getDetails(this.$route.params.id);
    this.show = show;

    this.seasons = show._embedded.episodes.reduce((results, current) => {
      let found = results.find(ep => ep.season == current.season);
      if (found) {
        // if season found push the ep in it
        found.episodes.push(current);
      } else {
        // if not create new season object
        let s = { 
          id: current.id,
          season: current.season, 
          episodes: [current],
          image: current.image,
          summary: current.summary
        }
        results.push(s);
      }

      return results;
    }, []);
  }
}
</script>

<style>
.details-container {
  margin-top: 3em;
}
</style>
