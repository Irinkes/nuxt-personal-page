<template>
  <section class="container">
    <div class="gallery">
      <div v-for="i in [currentIndex]" :key="i" class="photo-wrap">
        <div class="photo" :style="{ backgroundImage: 'url(' + currentImg + ')' }"></div>
      </div>
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
    <Menu></Menu>
  </section>
</template>


<script>
	import Menu from '~/components/Menu.vue';

	export default {
		components: {
			Menu,
		},
		data: function() {
			return {
	      images: [
		      "https://imgur.com/whfcuAO.jpg",
		      "https://imgur.com/wpaMKVT.jpg",
		      "https://imgur.com/rMayXyp.jpg",
		      "https://imgur.com/cjBWGim.jpg"
	      ],
	      timer: null,
	      currentIndex: 0
			}
		},

	  mounted: function() {
		  this.startSlide();
	  },

	  methods: {
		  startSlide: function() {
			  this.timer = setInterval(this.next, 4000);
		  },

		  next: function() {
			  this.currentIndex += 1;
		  },
		  prev: function() {
			  this.currentIndex -= 1;
		  }
	  },

	  computed: {
		  currentImg: function() {
			  return this.images[Math.abs(this.currentIndex) % this.images.length];
		  }
	  }

	}
</script>

<style lang = 'scss' scoped>

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: #000324;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
  }

  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }

  .prev:hover, .next:hover {
    background-color: rgba(255,87,51,0.7);
  }

  .gallery, .photo-wrap {
    text-align: center;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .photo {
    width: 100%;
    height: 100%;
    background-size: 675px auto;
    background-position: center center;
    background-repeat: no-repeat;
  }

</style>

