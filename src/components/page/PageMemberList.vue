<template>
<div>
    <h3>メンバー一覧</h3>
    <b-row>
        <b-col sm="2">
        </b-col>
        <b-col sm="8">
            <!-- <b-list-group>
                <b-list-group-item v-for="member in memberList" :key="member.memberId">{{member.memberNickName}}</b-list-group-item>
            </b-list-group> -->
            <b-card-group>
              <b-card v-for="member in memberList" :key="member.memberId"
               :title="member.memberNickName"
               style="max-width: 20rem;"
              >
              <p class="card-text">
                名前：{{member.memberFirstName}} {{member.memberLastName}}<br>
              </p>
              </b-card>
            </b-card-group>
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
        console.log(that.$data.memberList)
      })
      .catch(e => {
        alert('test')
        console.log(e)
      })
  }
}
</script>
