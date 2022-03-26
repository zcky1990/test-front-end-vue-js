<template>
  <section class="container is-fullheight">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="field">
            <table class="table is-striped is-narrow is-hoverable  is-fullwidth">
              <thead>
                <tr>
                  <th><abbr title="Position">Id</abbr></th>
                  <th><abbr title="Played">Name</abbr></th>
                  <th><abbr title="Won">Number</abbr></th>
                  <th><abbr title="Drawn">Balance</abbr></th>
                  <th><abbr title="Lost">Action</abbr></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in userlist" :key="`${user.id}`">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.number }}</td>
                  <td>{{ user.balance }}</td>
                  <td>
                    <button class="button" @click="editUser(user.id)">
                      Edit
                    </button>
                    <button class="button" @click="closeUser(user.id)">
                      Close
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserList",
  props: ["userlist", "searchlist"],
  methods: {
    editUser(id) {
      this.$emit("setId", id);
    },
    closeUser(id){
      this.$emit("closeAccount", id);
    }
  },
};
</script>

<style scoped>
</style>
