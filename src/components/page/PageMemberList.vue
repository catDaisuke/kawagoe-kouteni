<template>
<div id="memberList">
    <h3>メンバー一覧</h3>
    <b-container>
    <b-row>
        <b-col align-self="center">
            <!-- <b-list-group>
                <b-list-group-item v-for="member in memberList" :key="member.memberId">{{member.memberNickName}}</b-list-group-item>
            </b-list-group> -->
            <b-container>
            <template v-if="vueMemberList != null">
              <b-row v-for="memberLists in vueMemberList" class="mb-3">
                <template v-if="memberLists.length === 3">
                <b-col v-for="member in memberLists" :key="member.memberId">
                  <b-card
                    :title="member.memberNickName"
                    style="max-width: 20rem;"
                    v-on:click="toMemberInfo(member.memberId)"
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
            </b-container>
        </b-col>
    </b-row>
    </b-container>
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
      for (var i = 0; i < this.$data.memberList.length; i++) {
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
    if (this.$store.state.user.id === null) {
      this.$router.push('/login')
      return
    }
    let that = this
    axios.get(`https://kawagoe-kouteni-webapp.herokuapp.com/member`)
      .then(response => {
        that.$data.memberList = response.data
      })
      .catch(e => {
        alert('test')
        console.log(e)
      })
  },
  methods: {
    toMemberInfo: function (memberid) {
      this.$store.commit({
        type: 'ADD_MEMBERID',
        id: memberid })
      console.log(this.$store.state.memberInfo.id)
      this.$router.push('/memberInfo')
    }
  }
}
</script>
<style scoped>
#memberList {
  font-size: 1rem;
}
.card-title {
  font-size:1rem;
}
</style>
