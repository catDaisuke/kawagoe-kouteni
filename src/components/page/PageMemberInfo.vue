<template>
<div>
    <!-- <h3>{{ member.memberNickName }}</h3> -->
    <b-container fluid>
    <b-row>
        <b-col align-self="center">
          <b-card no-body v-bind:title="member.memberNickName">
            <b-card-body class="card-text">
              <p class="card-text" v-if="member.memberIntroduction != null">
                {{ member.memberIntroduction }}
              </p>
              <p v-else class="card-text">
                紹介文はまだありません。
              </p>
            </b-card-body>
              <b-list-group flush>
                <b-list-group-item>
                  {{ member.memberFirstName }} {{ member.memberLastName }}
                </b-list-group-item>
            <!-- </p>
            <p class="card-text"> -->
                <b-list-group-item>
                  {{ member.memberBirthYear }}年 {{ member.memberBirthMonth }}月 {{ member.memberBirthDay }}日 生まれ
                </b-list-group-item>
                <b-list-group-item>
                  {{ member.memberBloodtype }}型
                </b-list-group-item>
              </b-list-group>
          </b-card>
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
  name: 'PageMemberInfo',
  data () {
    return {
      member: null
    }
  },
  created: function () {
    if (this.$store.state.user.id === null) {
      this.$router.push('/login')
      return
    }
    let that = this
    // console.log(this.$store.memberInfo.id)
    var param = {
      id: this.$store.state.memberInfo.id
    }
    axios.get(`https://kawagoe-kouteni-webapp.herokuapp.com/member/memberid`, {
      params: param
    })
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data)
        that.$data.member = response.data
      })
      .catch(e => {
        alert('test')
        console.log(e)
      })
  }
}
</script>
