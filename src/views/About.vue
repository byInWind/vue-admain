<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2 v-for="item in items">{{item.val}}</h2>
    </div>
</template>
<script>
    export default {
        name: 'about',
        data: function () {
            return {
                items: [
                    {val: 1},
                    {val: 2},
                    {val: 3},
                    {val: 4}
                ]
            }
        }
    }
</script>
