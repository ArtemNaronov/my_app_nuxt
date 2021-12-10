<template>
  <section>
    <Breadcrumb />
    <h1>{{pageTitle}}</h1>
    <div class="User">
      <UserCard v-for="user of users" :user="user" :key="user.id"/>
    </div>
  </section>
</template>

<script>
export default {
  async fetch({store}) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  data: () => ({
    pageTitle: 'Users page'
  }),
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  }
}
</script>

