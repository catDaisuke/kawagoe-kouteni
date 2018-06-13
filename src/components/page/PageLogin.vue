<template>
<div>
  <p>ログイン</p>
  <b-container fluid>
    <b-row>
        <b-col align-self="center">
            <div>
                <b-form-group id="loginid"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    description="input your id."
                    label="Enter your id"
                    label-for="inputid">
                <b-form-input id="inputid" v-model="id"></b-form-input>
                </b-form-group>
                <b-form-group id="loginpassword"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    description="input your password."
                    label="Enter your password"
                    label-for="inputpassword">
                    <b-form-input id="inputpassword" type="password" v-model="password"></b-form-input>
                </b-form-group>
            </div>
            <b-button v-on:click="login">login</b-button>
        </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
// import { mapState, mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
  components: {
  },
  name: 'PageLogin',
  data () {
    return {
      id: null,
      password: null
    }
  },
  created: function () {
    this.$store.commit({
      type: 'REMOVE_USERID'})
  },
  methods: {
    login: function () {
      if (this.$data.id == null || this.$data.password == null) {
        alert('idもしくはパスワードが不正です')
        return
      }

      var that = this
      var param = {
        id: this.$data.id,
        password: this.$data.password
      }
      axios.get(`https://kawagoe-kouteni-webapp.herokuapp.com/member/login`, {
        params: param
      })
        .then(response => {
          // JSON responses are automatically parsed.
          this.$store.commit({
            type: 'ADD_USERID',
            id: that.id })
          this.$store.commit({
            type: 'ADD_PASSWORD',
            password: that.password
          })
          this.$router.push('/memberList')
        })
        .catch(e => {
          alert(e.response.data.message)
          console.log(e.response)
        })
    }
  }
}
</script>
