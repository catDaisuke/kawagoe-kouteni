<template>
<div>
    <h3>メンバー一覧</h3>
    <b-row>
        <b-col sm="2">
        </b-col>
        <b-col sm="8">
            <b-list-group>
                <b-list-group-item v-for="member in memberList" :key="member.id">{{member.name}}</b-list-group-item>
            </b-list-group>
        </b-col>
        <b-col sm="2">
        </b-col>
    </b-row>
</div>
</template>
<script>
import KouteniHeader from '@/components/header/KouteniHeader.vue'
export default {
  components: {
    KouteniHeader
  },
  name: 'PageMemberList',
  data () {
    return {
      memberList: [{id: 'simazaki', name: '島崎'}, {id: 'nakajo', name: '中條'}]
    }
  }
}
</script>
