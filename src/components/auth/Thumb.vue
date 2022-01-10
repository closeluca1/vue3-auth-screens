<template>
  <img class="img-fluid px-4 mt-5" :src="thumbImg" alt="">
</template>

<script>
export default {
    name: 'Thumb',
    props: {
        thumbImg: String,
    }
}
</script>

<style>

</style>