<template>
  <div>
    <p>name : {{ userInfo.id}}</p>
    <p>karma : {{ userInfo.karma}}</p>
    <p>created : {{ userInfo.created}}</p>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  created(){
    // console.log(this.$route);
    // axios.get(`https://api.hnpwa.com/v0/user/davideast.json`)
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>