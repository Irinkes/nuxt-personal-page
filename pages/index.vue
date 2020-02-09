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


</style>

