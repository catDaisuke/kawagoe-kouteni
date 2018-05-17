<template>
<div>
    <b-row>
        <b-col sm="2">
        </b-col>
        <b-col sm="8">
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
         <b-col sm="2">
        </b-col>
    </b-row>
</div>
</template>
<script>
// import { mapState, mapActions, mapGetters } from 'vuex'
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
  methods: {
    login: function () {
      this.$store.commit({
        type: 'ADD_USERID',
        id: this.$data.id })
      console.log(this.$data.id)
      console.log(this.$store.state.id)

      alert('APIを呼び出さずメンバー一覧画面に遷移')
      this.$router.push('/memberList')
    }
  }
}
</script>
