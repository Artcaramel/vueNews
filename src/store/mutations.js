export default {
      SET_NEWS(state , news){
        state.news = news;
      },
      SET_JOBS(state , jobs){
        state.jobs = jobs;
      },
      SET_ASKS(state, asks){
        state.asks = asks;
      },
      SET_USER(state, user){
        state.user = user;
      },
      SET_ITEM(state, item){
        state.item = item;
      }
    //   ADD_POST(state, newPost) {
    //     state.posts.push(newPost); // 상태 업데이트
    // }   
}