<template>
    <div class="app-wrapper">
        <!-- 侧边框 -->
        <sidebar class="sidebar-container"></sidebar>
        <!-- 主体 -->
        <div class="main-container hasTagsView">
            <span @click="aa">{{obj.a}}</span>
            <div>
                <navbar></navbar>
                <tags-view></tags-view>
            </div>
            <app-main></app-main>
        </div>
    </div>
</template>
<script>
import {Sidebar,Navbar,TagsView,AppMain} from './components'
import {mapState} from "vuex"
export default {
    components:{Sidebar,Navbar,TagsView,AppMain},
    data(){
        return{
            obj:{a:"aa"}
        }
    },
    computed:{
        ...mapState({
            sidebar: state => state.app.sidebar,
            device: state  => state.app.device
        })
    },
    methods:{
        aa(){


        },
        adda(obj){
            obj.a=obj.a+1
        },
        addb(obj){
            obj.b=obj.b+1
        },
        async login(){
           
        },
    },
    created(){

 


        // this.obj={a:0}
        // this.$set(this.obj,'b',0)
        // console.log(this.obj)
        // this.login();
    }
}
</script>
<style lang="scss" scoped>
    .app-wrapper{
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>