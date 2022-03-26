<template>
  <div class="modal" v-bind:class="{ 'is-active': isModalActive }">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Account</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="container">
          <div class="field has-text-left">
            <label class="label">Name</label>
            <div class="control">
              <input v-model="name" class="input is-medium" type="text" />
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="addUser">submit</button>
        <button class="button" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddAccount",
  props: {
    isModalActive: Boolean,
  },
  data() {
    return {
      name: "",
      url: "https://front-end-test-assignment.fintech-market.com/api/v1/accounts",
      auth: "Basic ZGFuYWJpamFrOmlWcFprMUMwQUZGd0RmRFY=",
    };
  },
  methods: {
    close() {
      this.$emit("closeadduser", "");
    },
    addUser() {
      var self = this;
      let config = {
        headers: {
          Authorization: this.auth,
          accept: "application/json",
        },
      };
      axios
        .post(this.url, { data: { name: this.name } }, config)
        .then(function (response) {
          self.$emit("addlist", response.data.data);
        })
        .catch(function (error) {
          alert(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
