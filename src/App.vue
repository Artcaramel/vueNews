<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';


export default {
  components: {
    ToolBar
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* 밑줄 없애기 */
a{
  color: #34495e;
  text-decoration: none;
}

/* 특정 태그의 상태 변화가 일어났을 때 스타일링 적용 */
a:hover {
  color: #42b883;
  text-decoration: underline;
}

/* 선택 시 밑줄 그리기 */
a.router-link-exact-active{
  text-decoration: underline;
}


/*  Router Transtion */
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,.page-leave-to {
  opacity: 0;
}
</style>
