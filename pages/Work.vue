<template>
  <section class="container">
    <div class="container-content">

      <div :key="key" class="work-list" v-for="(value, key) in this.$store.state.workList">
        <div class="work-list-years">
          {{key}}
        </div>
        <div class="work-list-title">
          {{value[0].title}}
        </div>
        <div class="work-list-job">
          {{value[0].job}}
        </div>
        <div class="work-list-duty">
          {{value[0].duty}}
        </div>
      </div>

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


    mounted() {
      this.$store.dispatch('loadWorkList');
    },

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
      flex-direction: column;
      flex: 1 0 auto;
      padding-top: 128px;
    }
  }

.work-list {
  margin-bottom: 40px;

  &-years {
    font-weight: bold;
    margin-bottom: 10px;
  }

  &-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  &-job {
    margin-bottom: 10px;
  }

  &-duty {
    color: #7F828B;
  }
}

</style>

