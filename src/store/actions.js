import { fetchAskList,
         fetchNewsList,
         fetchJobsList,
         fetchList,
         fetchUserInfo,
         fetchAskItem } from '../api/index.js';

export default {
    FETCH_NEWS(context){
        fetchNewsList()
            .then(response => {
                // console.log(response.data);
                context.commit('SET_NEWS', response.data);
                 return response
                // this.state.news = response.data  action-> state로 갈 수 없어서 이건 사용 불가능. mutation을 꼭 거쳐야함
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_JOBS({ commit }){   // Destructuring 사용해서 생략
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS',data);
            })
            .catch(error => {
                console.log(error);
            })

    },
    FETCH_ASKS({ commit }){
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASKS',data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_USER({ commit }, username){
        fetchUserInfo(username)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ITEM({commit}, itemid){
        fetchAskItem(itemid)
            .then(({ data }) => {
                commit('SET_ITEM' , data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
        .then(({ data }) => commit('SET_LIST', data))
        .catch(error => console.log(error));
    }

    // CREATE_POST({ commit }, postData) {
    //     createPost(postData)
    //         .then(({ data }) => {
    //             console.log('Post created:', data);
    //             commit('ADD_POST', data); // 뮤테이션 호출로 상태 업데이트
    //         })
    //         .catch(error => {
    //             console.error('Error creating post:', error);
    //         });
    // }
}