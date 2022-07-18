<template>
  <div>
    <el-row class="tac">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu v-for="(item,index) in menuData" :key="index" :index="item.title">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group v-for="(list,idx) in item.group" :key="idx" :index="list.title">
            <template slot="title">{{list.title}}</template>
            <el-menu-item v-for="(data,i) in list.items" :key="i" :index="data">{{data}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    menuData: Array
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(this.menuData)
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  height:500px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
