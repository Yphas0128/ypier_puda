<template>
    <div>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="activeMenu"
                :collapse="isCollapse"
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :unique-opened="false"
                :active-text-color="variables.menuActiveText"
                :collapse-transition="false"
                mode="vertical"
            >
                <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            variables:{
                menuBg: "#304156",
                menuText: "#bfcbd9",
                menuActiveText: "#409EFF"
            }
        }
    },
    computed:{
        ...mapGetters([
            'permission_routes'
        ]),
        activeMenu(){

        },
        isCollapse(){

        },
        isCollapse(){

        }
    },
    components:{SidebarItem}
}
</script>
<style lang="scss" scoped>

</style>