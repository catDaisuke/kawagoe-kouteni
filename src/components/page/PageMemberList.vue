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
import axios from 'axios'
export default {
  components: {
    KouteniHeader
  },
  name: 'PageMemberList',
  data () {
    return {
      memberList: null
    }
  },
  created: function () {
    console.log('create')
    let that = this
    axios.get(`https://kawagoe-kouteni-webapp.herokuapp.com/member`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data)
        that.$data.memberList = response.data
      })
      .catch(e => {
        alert('test')
        console.log(e)
      })
  }
}
</script>
