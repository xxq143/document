---
# https://vitepress.dev/zh/reference/frontmatter-config
title: Docs with VitePress
# editLink: true
# doc | home | page
layout: doc
---
<script setup>
    import {reactive} from 'vue'
    const state = reactive({
        count: 0
    })
    function increment() {
        state.count += 1
    }
</script>

<div class='test'>
    <div>{{state.count}}</div>
    <button @click="increment">click</button>
</div>

# $frontmatter.title

[![{{$frontmatter.cat}}](/cat.jpg "cat")](http://tomandjerry.run:8080)

![{{$frontmatter.cat}}](/cat.jpg "cat")

## 二级标题


<style lang="stylus">
    .test
        button
            color: red
            border: 1px solid cyan
            border-radius: 5px
            padding: 0 5px
</style>