<template>
  <section class="container">
    <div class="container-content">
      <WelcomeText></WelcomeText>
    </div>
    <Menu></Menu>
  </section>
</template>

<script>
import Menu from '~/components/Menu.vue';
import WelcomeText from '~/components/WelcomeText.vue'

export default {
  components: {
    Menu,
	  WelcomeText
  }
}
</script>

<style>


/*.title {*/
/*  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; !* 1 *!*/
/*  display: block;*/
/*  font-weight: 300;*/
/*  font-size: 100px;*/
/*  color: #35495e;*/
/*  letter-spacing: 1px;*/
/*}*/

</style>

