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
            const routes = (router as any).options.routes
            console.log(28, routes)
            const nodeRouter:any = routes.find((
                i: {
                    name: string ,
                    path: string,
                    component: any }
                ) => {
                return i.name === 'nodePage'
            })
            console.log(31, nodeRouter)
           /* this.routerList = nodeRouter.children
            let fibonacci: number[] = [1, 1, 2, 3, 5];
            console.log(27, fibonacci)*/
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
    .p-node {
        h3 {
            cursor: pointer;
        }
    }
</style>
