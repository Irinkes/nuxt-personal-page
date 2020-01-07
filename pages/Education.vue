<template>
  <section class="container">
    <div class="container-content">
      <transition name="slide">
        <div class="education-content" v-if="showEducation">
          <div v-for="(item, key) in educationValue" :key="key" class="education-item">
            <p>{{item.title}}</p>
            <span>{{item.descr}}</span>
          </div>

        </div>
      </transition>

        <ul class="list__year">
            <li v-for="(value, key) in this.getEducation" :key="key" @click="showEducationText(value, key)" :class="{'activeYear': key === activeIndex}">
              {{key}}
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
	      showEducation: false,
        educationValue: {},
			  educationData: [],
	      activeIndex: null
		  }
	  },

	  mounted() {
      this.$store.dispatch('loadEducationList');
	  },

    methods: {
      showEducationText(value, key) {
	      this.activeIndex = key;
        this.showEducation = true;
        this.educationValue = value;
      }
    },
    computed: {
      ...mapGetters(['getEducation']),
    }

	}
</script>

<style lang = 'scss' scoped>
  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;

    &-content {
      display: flex;
     }
  }

  .education-content {
    align-self: center;
  }

  .education-item {
    margin-bottom: 16px;

    p {
      font-weight: bold;
    }
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }


  .slide-enter-active {
    animation: slide-in 1.5s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 1.5s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-2000px);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-2000px);
    }
  }

  .activeYear {
    color: #FF5733;
  }

</style>

