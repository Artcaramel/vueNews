<template>
    <div>
        <div class="user-container">
            <div>
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="user-description">
                <slot name="username"></slot>
                <!-- <div>
                    username : {{ info.id }}
                </div> -->
                <!-- <router-link v-bind:to="`/user/${userInfo.user}`">
                    {{ userInfo.user }}
                </router-link> -->
              <div class="time">
                <!-- time : {{ info.created }} -->
                <slot name="time"></slot>
                <slot name="karma"></slot>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    props:{
        info : Object
    }
    // computed: {
    //     userInfo() {
    //       return this.$store.state.user
    //     }
    // },
  }
  </script>
  
  <style scoped>
  .user-container{
    display: flex;
    align-items: center;
    padding : 0.5rem;
  }
  
  .fa-user{
    font-size : 2.5rem;
  }
  
  .user-description{
    padding: 8px;
  }
  
  .time {
    font-size : 0.7rem;
  }
  
  </style>