import ListView from './ListView.vue';
import bus from '../utils/bus.js';

// 하이 오더 컴포넌트(hoc) (각각 카컴포넌트를 통합해서 사용 (재활용 개념)) - 단점은 컴포넌트가 깊어지면서 통신이 어려워짐
export default function createListView(name){
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            bus.$emit('start:spinner')
            setTimeout(() => {
              this.$store.dispatch('FETCH_LIST' , this.$route.name)
                .then(() => {
                  console.log('fetched');
                  bus.$emit('end:spinner')
                })
                .catch((error) => {
                  console.log(error);
                })
            }, 3000)
        },
        render(createElement){
            return createElement(ListView);
        }
    }
}