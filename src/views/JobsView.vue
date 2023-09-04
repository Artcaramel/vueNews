<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs" v-bind:key="job.id">{{ job.title }}</div> -->
    <p v-for="job in fetchJob" v-bind:key="job.id">
    <a v-bind:href="job.url">{{ job.title }}</a>
    <small> {{(job.time_ago)}} | {{(job.domain)}}</small>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    fetchJob(){
      return this.$store.state.jobs;
    }
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }

}
// .then( (response) =>{
// this.users = response.data,
// console.log(response)
// } log 띄우고 싶다면 이런 식으로 {} 에 2줄로 담아주면 된다
</script>

<style>

</style>