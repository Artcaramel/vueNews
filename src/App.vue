<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner
  },
  data(){
    return {
      loadingStatus : false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner' , this.startSpinner);
    bus.$on('end:spinner', this.endSpinner)
  },
  // 이벤트 사용할 때는 무조건 beforeDestroy() 사용이 필요하다
  // App 컴포넌트 아래에 있는 router-view 컴포넌트에서 화면이 변환되는 것이기 때문에 탭이나 브라우저를 끄지 않는 이상 App 컴포넌트가 소멸되지 않는다.
  beforeDestroy() {
    bus.$off('start:spinner' , this.startSpinner);
    bus.$off('end:spinner', this.endSpinner)
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
