<template>
    <div class="p-node">
        node数据测试
        ---
        <div>
            <h3>data1</h3>
            <h3>data2</h3>
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts">
  import router from '@/router/index.ts'
/*  import { Component, Vue } from 'vue-property-decorator';
  @Component({})
  export default class About extends Vue {

  }*/
  export default {
    name: '',
    data() {
      return {
        routerList: []
      }
    },
    created() {
        console.log(27, router)
      const nodeRouter = router.options.routes.find(i=>{
      	return i.name === 'nodePage'
      })
      this.routerList = nodeRouter.children
	    let fibonacci: number[] = [1, 1, 2, 3, 5];
	    console.log(27, fibonacci)
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
    .p-node {
        h3{
            cursor: pointer;
        }
    }
</style>
