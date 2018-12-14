<template>
  <div @mouseover="showLastEp = true" @mouseout="showLastEp = false" class="movie-list-entry">
    <h3 class="text-primary">Season {{ season.season }}<span v-if="season.name">: {{ season.name }}</span></h3>
    <div class="row">
      <div class="col-md-2">
        <img v-if="season.image" class="thumbnail" :src="season.image.medium">
        <img v-else class="thumbnail" src="@/assets/no-image.jpg">
      </div>
      <div class="col-md-9" v-html="season.summary"></div>
      <div class="col-md">
        Episodes: {{ season.episodes.length }}
      </div>
    </div>
    <div v-show="showLastEp" class="last-episode">
      <p class="text-success"><strong>Last episode:</strong> {{ season.episodes[season.episodes.length-1].airdate }}</p>
      <div class="row">
        <div class="col-md-2">
          <img v-if="season.episodes[season.episodes.length-1].image" class="thumbnail" :src="season.episodes[season.episodes.length-1].image.medium">
          <img v-else class="thumbnail" src="@/assets/no-image.jpg">
        </div>
        <div class="col" v-if="season.episodes[season.episodes.length-1].summary" v-html="season.episodes[season.episodes.length-1].summary"></div>
        <div class="col" v-else>No summary found for the last episode.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'season',
  props: [ 'season' ],
  data() {
    return {
      showLastEp: false
    }
  },
}
</script>

<style>
.last-episode {
  background: #666;
  padding: 1em;
}
</style>
