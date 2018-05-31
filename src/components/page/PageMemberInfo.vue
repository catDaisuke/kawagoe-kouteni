<template>
<div>
    <!-- <h3>{{ member.memberNickName }}</h3> -->
    <b-row>
        <b-col sm="2">
        </b-col>
        <b-col sm="8">
          <b-card v-bind:title="member.memberNickName">
            <p class="card-text">
              {{ member.memberFirstName }} {{ member.memberLastName }}<br>
            <!-- </p>
            <p class="card-text"> -->
              {{ member.memberBirthYear }}年 {{ member.memberBirthMonth }}月 {{ member.memberBirthDay }}日 生まれ<br>
              {{ member.memberBloodtype }}型<br>
            </p>
          </b-card>
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
  name: 'PageMemberInfo',
  data () {
    return {
      member: null
    }
  },
  props: {
    memberid: {
      type: String,
      defalut: 'catDaisuke'
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
