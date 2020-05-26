//创建vue根实例
import Vue from 'vue'

import App from './App.vue'
new Vue({
    el: '#app',
    components: {
        //组件名：组件对象
        App: App
    },
    template:'<App/>'
})
//挂载app组件

const arr = [1,2,3].map(item => item + 1)
console.log(arr)