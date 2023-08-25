<template>
  <div>
    <div v-for="user in users" v-bind:key="user">{{ user.title }}</div>
    <div>
      <router-link to="/user">User</router-link>|
      <router-link to="/item">Item</router-link>
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return{
      users: []
    }
  },
  created() {
    var vm = this; // this 바인딩
    fetchNewsList()
      .then(function(response){
        console.log(response);
        vm.users = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}
</script>

<style>

</style>