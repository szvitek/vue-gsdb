<template>
  <div>
    <div class="row movie-list-entry" v-for="show in shows" :key="show.id">
      <div class="col-md-2">        
        <img v-if="show.image" class="thumbnail" :src="show.image.medium">
        <img v-else class="thumbnail" src="@/assets/no-image.jpg">
      </div>
      <div class="col-md-8">
        <h3>{{ show.name }}</h3>
        <div v-html="show.summary"></div>
      </div>  
      <div class="col-md-2 button-container">
        <button class="btn btn-primary">DETAILS</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'shows' ]
}
</script>

<style>
.thumbnail {
  max-width: 100%;
}
.movie-list-entry {
  margin-bottom: 1em;  
  border: 1px solid grey;
  padding: 1em;
}
.button-container {
  display:flex;
  flex-direction: column;
  justify-content: center;
}
</style>
