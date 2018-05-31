<template>
<div>
  <h1>メインページ（コンテンツ未整理）</h1>
</div>
</template>
<script>
import KouteniHeader from '@/components/header/KouteniHeader.vue'
export default {
  components: {
    KouteniHeader
  },
  name: 'PageMain',
  data () {
    return {
      helloMsg: ''
    }
  },
  created: function () {
    if (this.$store.state.user.id === null) {
      this.$router.push('/login')
    }
  }
}
</script>
