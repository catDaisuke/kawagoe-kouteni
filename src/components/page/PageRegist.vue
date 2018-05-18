<template>
<div>
    <b-row>
        <b-col sm="2">
        </b-col>
        <b-col sm="8">
            <div>
                <b-form-group id="id"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    description="input your id."
                    label="Enter your id"
                    label-for="inputid">
                <b-form-input id="inputid" v-model="id"></b-form-input>
                </b-form-group>
                <b-form-group id="password"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    description="input your password."
                    label="Enter your password"
                    label-for="inputpassword">
                    <b-form-input id="inputpassword" type="password" v-model="password"></b-form-input>
                </b-form-group>
                <b-form-group id="firstName"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    description="input your firstname."
                    label="Enter your firstname"
                    label-for="inputfirstname">
                <b-form-input id="inputFirstName" v-model="firstname"></b-form-input>
                </b-form-group>
                <b-form-group id="lastName"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    description="input your lastname."
                    label="Enter your lastname"
                    label-for="inputlastname">
                    <b-form-input id="inputLastName" v-model="lastname"></b-form-input>
                </b-form-group>
                <b-form-group id="nickName"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    description="input your nickname."
                    label="Enter your nickname"
                    label-for="inputnickname">
                    <b-form-input id="inputNickName" v-model="nickname"></b-form-input>
                </b-form-group>
                <b-form-group id="email"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    description="input your email."
                    label="Enter your emailAddress"
                    label-for="inputemail">
                    <b-form-input id="inputEmail" type="email" v-model="email"></b-form-input>
                </b-form-group>
            </div>
            <b-button v-on:click="regist">登録</b-button>
        </b-col>
         <b-col sm="2">
        </b-col>
    </b-row>
</div>
</template>
<script>
// import { mapState, mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
  components: {
  },
  name: 'PageRegist',
  data () {
    return {
      id: null,
      password: null,
      firstname: null,
      lastname: null,
      nickname: null,
      email: null
    }
  },
  methods: {
    regist: function () {
      let that = this
      axios.post(`https://kawagoe-kouteni-webapp.herokuapp.com/member/regist`, {
      })
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
        })
        .catch(e => {
          alert('登録に失敗しました')
          console.log(e)
        })
    }
  }
}
</script>
