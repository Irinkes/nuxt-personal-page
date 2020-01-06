<template>
  <div class="contacts">
    <Facebook />
    <Insta />
    <Skype />
    <Youtube />
  </div>
</template>
<script>
	import Facebook from '@/assets/svg/facebook.svg';
	import Insta from '@/assets/svg/instagram.svg';
	import LinkedIn from '@/assets/svg/linkedin.svg';
  import Skype from '@/assets/svg/skype.svg';
  import Youtube from '@/assets/svg/youtube.svg';

	export default {
		name: 'Example',
		components: {
	    Facebook,
	    Insta,
	    LinkedIn,
	    Skype,
	    Youtube,
		}
	};
</script>
