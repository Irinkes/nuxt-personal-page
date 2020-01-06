<template>
  <section class="container">
    <div class="container-content">
      <div class="title">Work experience: <span class="work-years"><animated-number
        :value="this.years"
        :formatValue="formatTo"
        :duration="1000"
      /> years </span><span class="work-months"><animated-number
        :value="this.months"
        :formatValue="formatTo"
        :duration="300"
      /> months</span></div>


    </div>

    <Menu></Menu>
  </section>
</template>

<script>
	import Menu from '~/components/Menu.vue';
  import AnimatedNumber from "animated-number-vue";
	import {mapGetters} from 'vuex';




  export default {
		components: {
			Menu,
	    AnimatedNumber
		},
		data: function() {
			return {
        years: 12,
        months: 4
			}
		},

		mounted() {
		},

		methods: {
	    formatTo(value) {
	      return value.toFixed(0);
      }
		},

		computed: {

		}

	}
</script>

<style lang = 'scss' scoped>
  .title {
    background: #A5B592;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    line-height: 30px;
    font-size: 24px;
    padding: 6px 30px;
    display: inline-block;
  }

  .container {
    align-items: flex-start;


    &-content {
      flex: 1 0 auto;
      padding-top: 128px;
    }
  }

</style>

