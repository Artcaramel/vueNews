<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="jobs-list">
      <li v-for="job in fetchJob" class="post" v-bind:key="job.id">
        <div class="points">
          {{  job.points || 0 }}
        </div>
        <div>
          <p class="jobs-title">
            <a v-bind:href="job.url">
              {{ job.title }}
            </a>
          </p>
          
          <small class="link-text">
            {{( job.time_ago )}} by
            <a v-bind:href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul> -->
    <!-- <div v-for="job in this.$store.state.jobs" v-bind:key="job.id">{{ job.title }}</div> -->
    <!-- <p v-for="job in fetchJob" v-bind:key="job.id">
    <a v-bind:href="job.url">{{ job.title }}</a>
    <small> {{(job.time_ago)}} | {{(job.domain)}}</small>
    </p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default{
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner')
        })
        .catch((error) => {
          console.log(error);
        })
    }, 3000)
  }
}

// export default {
//   computed: {
//     fetchJob(){
//       return this.$store.state.jobs;
//     }
//   },
//   created() {
//     this.$store.dispatch('FETCH_JOBS')
//   }

// }
// .then( (response) =>{
// this.users = response.data,
// console.log(response)
// } log 띄우고 싶다면 이런 식으로 {} 에 2줄로 담아주면 된다
</script>

<style>
</style>