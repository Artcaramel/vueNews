<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';
export default {
  data() {
    return{
      jobs: []
    }

  },
  created() {
    fetchJobsList()
      .then(response => this.jobs = response.data)
      .catch(error => console.log(error));
  }

}
// .then( (response) =>{
// this.users = response.data,
// console.log(response)
// } log 띄우고 싶다면 이런 식으로 {} 에 2줄로 담아주면 된다
</script>

<style>

</style>