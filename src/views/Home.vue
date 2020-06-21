<template>
    <div>
      <home-page></home-page>
      <bnav></bnav>
    </div>
</template>

<script>
  import HomePage from "../components/HomePage";
  import bnavigation from "../components/bnavigation";
    export default {
      components:{
        "home-page":HomePage,
        "bnav":bnavigation
      }
    }
</script>

<style>

</style>
