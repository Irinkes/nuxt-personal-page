<template>
  <div class="welcome">
    Hi there. I'm
    <div class="name">Irina Gracheva</div>
    <div>frontend developer</div>
    <div class="social">
<!--      <span @click = "showSocial = !showSocial" class="button">Contact me</span>-->
      <transition name="slide" appear>
        <SocialNetworks v-if="showSocial"></SocialNetworks>
      </transition>
    </div>
  </div>
</template>
<script>
	import SocialNetworks from '~/components/SocialNetworks.vue';

	export default {
		components: {
	    SocialNetworks,
		},

		data: function() {
			return {
				showSocial: true
			}
		}
	}

</script>

<style>

  .fade-enter {
    opacity:  0;
  }

  .fade-enter-active {
    transition: opacity 3s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 3s;
    opacity:  0;
  }

  .slide-enter-active {
    animation: slide-in 1.5s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 1.5s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-2000px);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-2000px);
    }
  }

</style>
