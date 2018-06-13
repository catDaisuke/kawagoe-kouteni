<template>
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand v-on:click='toHome'>川越高校硬式テニス同好会2006-2009</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="http://blog.livedoor.jp/kawagoe_tennis/">川越高校テニス部ブログ</b-nav-item>
      <b-nav-item href="#" disabled>工事中</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <!-- <b-nav-form> -->
        <!-- <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/> -->
        <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
      <!-- </b-nav-form> -->

      <!-- <b-nav-item-dropdown text="Lang" right> -->
        <!-- <b-dropdown-item href="#">EN</b-dropdown-item> -->
        <!-- <b-dropdown-item href="#">ES</b-dropdown-item> -->
        <!-- <b-dropdown-item href="#">RU</b-dropdown-item> -->
        <!-- <b-dropdown-item href="#">FA</b-dropdown-item> -->
      <!-- </b-nav-item-dropdown> -->

      <div v-if="userId != null">
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>{{ userId }}</em>
        </template>
        <b-dropdown-item v-on:click='logout'>ログアウト</b-dropdown-item>
        <b-dropdown-item v-on:click='changeInfo'>登録情報変更</b-dropdown-item>

        <!-- <b-dropdown-item href="#">Signout</b-dropdown-item> -->
      </b-nav-item-dropdown>
      </div>
      <div v-else>
        <b-btn v-on:click='login'>login</b-btn>
        <b-btn v-on:click='regist'>新規登録</b-btn>
      </div>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>
<script>
export default {
  name: 'KouteniHeader',
  data () {
    return {
    }
  },
  computed: {
    userId: function () {
      return this.$store.state.user.id
    }
  },
  methods: {
    toHome: function () {
      if (this.$store.state.user.id === null) {
        this.$router.push('/login')
      } else {
        this.$router.push('/main')
      }
    },
    login: function () {
      this.$router.push('/login')
    },
    regist: function () {
      this.$router.push('/regist')
    },
    logout: function () {
      this.$store.commit({
        type: 'REMOVE_USERID'})
      this.$router.push('/login')
    },
    changeInfo: function () {
      this.$router.push('/changeinfo')
    }
  }
}
</script>
