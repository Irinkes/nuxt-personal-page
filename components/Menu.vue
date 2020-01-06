<template>
  <div class="menu">
    <menu-logo></menu-logo>
    <ul>
        <li v-for="(item, index) in menuItems" :key="index">
            <menu-item :url="item.url">{{item.name}}</menu-item>
        </li>
    </ul>
  </div>
</template>

<script>
	import MenuItem from '~/components/MenuItem.vue';
  import MenuLogo from '~/components/MenuLogo.vue'

	export default {
		components: {
			MenuItem,
      MenuLogo
		},

		data: function() {
        return {
        	menuItems: [
	          { name: 'Home', url: '/' },
	          { name: 'About', url:'/About' },
	          { name: 'Skills', url:'/Skills' },
	          { name: 'Education', url:'/Education' },
	          { name: 'Experience', url:'/Experience' },
	          { name: 'Work', url:'/Work' },
	          { name: 'Blog', url:'/Blog' },
	          { name: 'Contact', url:'/Contact' },
          ]
        }
    }
	}

</script>


