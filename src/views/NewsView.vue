<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news" v-bind:key="user.id">{{ user.title }}</div> -->
    <p v-for="user in this.$store.state.news" v-bind:key="user.id">
      <a v-bind:href="user.url">{{ user.title }}</a>
      <small> {{( user.time_ago )}} | 
      <!-- <router-link v-bind:to="'/user' + user.user">{{ user.user }}</router-link> -->
      <router-link v-bind:to="`/user/${user.user}`">{{ user.user }}</router-link>
      </small>
    </p>
    <!-- <div>
      <router-link to="/user">User</router-link>|
      <router-link to="/item">Item</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return{
  //     users: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // var vm = this; // this 바인딩

  //   1)
  //   fetchNewsList()
  //     .then(function(response){
  //       console.log(response);

  //       2)
  //       vm.users = response.data;
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     })
  }
}  

</script>

<style>

</style>