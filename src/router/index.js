import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';

Vue.use(VueRouter);

export const router = new VueRouter({
      // 페이지의 라우팅 정보      
      routes: [
        // 로그인 페이지 정보
        {
          // 페이지의 url
          path: '/news',
          // name: 'login',
          // 해당 url에서 표시될 컴포넌트
          component: NewsView
        },
        // 메인 페이지 정보
        {
          path: '/ask',
          component: AskView
        },
        {
          path: '/jobs',
          component: JobsView
        }
      ]
});
