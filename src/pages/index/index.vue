<template>
 <div id="app">
    <el-container>
        <el-aside width="200px">
            <LeftMenu :menuData="menuData"></LeftMenu>
        </el-aside>
        <el-container>
            <el-header>
                <HelloWorld v-on:changeMenuData="changeMenuData"/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LeftMenu from '@/components/LeftMenu.vue'
export default {
  components: {
    HelloWorld,
    LeftMenu
  },
  data(){
      return {
        menuData:[
            {title:'demo1的导航1',group:[{title:'分组1',items:['选项一','2']}]},
            {title:'demo1的导航2',group:[{title:'分组2',items:['选项一','2','3']}]},
            {title:'demo1的导航3',group:[]},
        ],
      }
  },
  methods:{
      changeMenuData(data){
          this.menuData = data
      }
  }
  
}
</script>

<style>
.el-container{
    height:500px;
}
</style>


