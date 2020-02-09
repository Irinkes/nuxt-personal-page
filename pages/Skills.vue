<template>
  <section class="container">
    <div class="container-content">
      <div class="title">Skills</div>
      <ul class="skills-list">
        <li v-for="(skill, index) in this.getSkill" :key="index">
          {{skill}}
        </li>
      </ul>
    </div>

    <Menu></Menu>
  </section>
</template>

<script>
	import Menu from '~/components/Menu.vue';
  import {mapGetters} from 'vuex';

	export default {
		components: {
			Menu,
		},
		data: function() {
			return {

			}
		},

		mounted() {
		},

		methods: {
		},

    computed: {
	    ...mapGetters(['getSkill']),
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

    &-content {
      flex: 1 0 auto;
      padding-top: 128px;
    }
  }

</style>

