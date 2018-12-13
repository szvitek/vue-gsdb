<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Welcome to GSDb!</h1>
      <p class="lead">GSDb a.k.a. Gyula's Series Database. Feel free to search for your favourite series or TV shows</p>
      <hr class="my-4">
      <form class="form-inline">
        <label class="sr-only" for="search">Name</label>
        <input type="text" class="form-control" id="search" v-model="searchTerm" placeholder="Search for series...">
        <button type="submit" @click.prevent="onSearch" class="btn btn-primary my-1">Search</button>
      </form>          
    </div>

    <SearchResults v-if="shows.length" />
  </div>

</template>

<script>
import SearchResults from './SearchResults.vue';
export default {
  name: 'home',
  components: {
    SearchResults
  },
  data() {
    return {
      searchTerm: '',
      shows: []
    }
  },
  methods: {
    onSearch() {
      console.log(this.searchTerm);
    }
  }
}
</script>
