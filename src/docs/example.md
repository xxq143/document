---
# https://vitepress.dev/zh/reference/frontmatter-config
title: Docs with VitePress
# editLink: true
# doc | home | page
layout: doc
---

<script setup>
    import {reactive} from 'vue'
    import {ElButton} from 'element-plus'
    import "element-plus/dist/index.css"
    const state = reactive({
        count: 0
    })
    function increment() {
        state.count += 1
    }
</script>

<div class='test'>
    <div>{{state.count}}</div>
    <el-button type="danger" @click="increment">click</el-button>
</div>

# 测试页面

<!-- [![cat](/cat.jpg "cat")](http://tomandjerry.run:8080) -->

<!-- ![cat](/cat.jpg "cat") -->

## 二级标题

<style lang="stylus">
    .test
        color red
        font-size 30px
</style>
