<template>
    <div id="first">
        <h1>{{ msg }} Maxime</h1>
    </div>
</template>


<script>
    export default {
        name: 'myFirst',
        props: {
            msg: String
        }
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 40px 0 0;
        color: cadetblue;
    }
</style>
