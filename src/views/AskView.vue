<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="asks-list">
      <li v-for="item in fetchedAsk" class="post" v-bind:key="item.id">
        <div class="points">
          {{  item.points }}
        </div>
        <div>
          <p class="asks-title">
            <router-link v-bind:to="`/item/${item.id}`">
              {{  item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`user/${item.user}`" class="link-text">
              {{  item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
    <!-- <p v-for="item in fetchedAsk" v-bind:key="item.id">     
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small> {{( item.time_ago )}} | {{ item.user }}</small>
    </p> -->
  </div>
</template>

<script>
  import ListItem from '../components/ListItem.vue';

  export default {
    components: {
      ListItem
    }
  }  
// import { mapGetters } from 'vuex';

// export default {
//   computed : {
//     ...mapGetters([
//       'fetchedAsk'
//     ])
    // #3번째 방법 
    // ...mapGetters({
    //   fetchedAsk : 'fetchedAsk'
    // })
    // #2번째 방법
    // ...mapState({
    //   ask: state => state.asks
    // })
      // #1번째 방법
      // ask() {
      //     return this.$store.state.asks;
      // }
      
  // },
  // created(){
  //   console.log(this.$route);
  //   this.$store.dispatch('FETCH_ASKS')
  //   var vm = this;
  //   fetchAskList()
  //     .then(function(response){
  //       vm.asks = response.data;
  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     })
  // }



  // methods: {
  //   ...mapActions([
  //     'CREATE_POST'
  //   ]),
  //   createNewPost() {
  //     const postData = {
  //       title: 'New Post',
  //       comments_count:687,
  //       id:37308747,
  //       points:423,
  //       time:1693320500,
  //       time_ago:"17 hours ago",
  //       type:"ask",
  //       url:"item?id=37308747",
  //       user:"MatthiasPortzel"
  //     };
  //     this.CREATE_POST(postData);
  //   }
  // }
// }
</script>

<style>

</style>