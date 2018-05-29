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
            <template v-if="vueMemberList != null">
              <b-row v-for="memberLists in vueMemberList">
                <template v-if="memberLists.length === 3">
                <b-col v-for="member in memberLists" :key="member.memberId">
                  <b-card
                    :title="member.memberNickName"
                    style="max-width: 20rem;"
                  >
                  <p class="card-text">
                    名前：{{member.memberFirstName}} {{member.memberLastName}}<br>
                  </p>
                  </b-card>
                </b-col>
                </template>
                <template v-else-if="memberLists.length === 2">
                <b-col v-for="member in memberLists" :key="member.memberId">
                  <b-card
                    :title="member.memberNickName"
                    style="max-width: 20rem;"
                  >
                  <p class="card-text">
                    名前：{{member.memberFirstName}} {{member.memberLastName}}<br>
                  </p>
                  </b-card>
                </b-col>
                <b-col></b-col>
                </template>
                <template v-else>
                <b-col v-for="member in memberLists" :key="member.memberId">
                  <b-card
                    :title="member.memberNickName"
                    style="max-width: 20rem;"
                  >
                  <p class="card-text">
                    名前：{{member.memberFirstName}} {{member.memberLastName}}<br>
                  </p>
                  </b-card>
                </b-col>
                <b-col></b-col>
                <b-col></b-col>
                </template>
              </b-row>
            </template>
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
  computed: {
    vueMemberList: function () {
      if (this.$data.memberList == null) {
        return null
      }
      var vueMember = []
      var list = []
      console.log(this.$data.memberList)
      for (var i = 0; i < this.$data.memberList.length; i++) {
        console.log(list)
        if (i % 3 === 0 && i > 0) {
          vueMember.push(list)
          list = []
          list.push(this.$data.memberList[i])
        } else {
          list.push(this.$data.memberList[i])
        }
      }
      vueMember.push(list)
      return vueMember
    }
  },
  created: function () {
    if (this.$store.state.id === null) {
      this.$router.push('/login')
      return
    }
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
