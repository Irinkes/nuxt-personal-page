<template>
    <nuxt-link  class="menu__link" :to="url" exact><slot></slot></nuxt-link>
</template>

<script>
	export default {
		props: {
			url: String,
    },
	  methods: {
		  isRouteActive: function(url) {
			  if (this.$route.path.includes(url)) {
				  return true;
			  } else {
				  return false;
			  }
		  }
	  }
	}

</script>
