import Vue from 'vue'
import VueRouter from 'vue-router';
// import NewsView from '../views/NewsView';
// import AskView from '../views/AskView';
// import JobsView from '../views/JobsView';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
      // url에 있는 # 삭제
      mode:'history',
      // 페이지의 라우팅 정보      
      routes: [
        {
          path: '/',
          // 페이지 키자마자 나오는 부분
          redirect: '/news'

        },
        {
          // 페이지의 url
          path: '/news',
          // 해당 url에서 표시될 컴포넌트
          // component: NewsView,
          component: createListView('NewsView'),
          name : 'news'
        },
        // 메인 페이지 정보
        {
          path: '/ask',
          // component: AskView,
          component: createListView('AskView'),
          name : 'ask'
        },
        {
          path: '/jobs',
          // component: JobsView,
          component: createListView('JobsView'),
          name : 'jobs'
        },
        {
          path:'/user/:id',
          component: UserView
        },
        {
          path:'/item/:id',
          component: ItemView
        }
      ]
});
