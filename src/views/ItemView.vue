<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
          <div>
            <i class="fa-solid fa-user"></i>
          </div>

          <div class="user-description">
            <router-link v-bind:to="`/user/${fetchItem.user}`">
                {{ fetchItem.user }}
            </router-link>
              <div class="time">
                {{ fetchItem.time_ago }}
              </div>
          </div>
      </div>
      <h2>{{ fetchItem.title }}</h2>
    </section>

    <section>
      <!-- 질문 댓글 ,  v-html : html 용어가 들어간 문서를 정리해서 출력해줌 ex) <p>어쩌구 저쩌구</p></p>-->  
      <div v-html="fetchItem.content"></div> 
    </section>



  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed : {
    ...mapGetters(['fetchItem']),
  },
  created() {
    // console.log(this.$route);
    const itemID = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemID)  
  }
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