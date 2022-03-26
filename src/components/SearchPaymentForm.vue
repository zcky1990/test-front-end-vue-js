<template>
  <div class="modal" v-bind:class="{ 'is-active': isModalActive }">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Search Payment</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="container">
              <div class="has-text-left">
                <label class="label">Id</label>
                <div class="control">
                  <input v-model="id" class="input is-small" type="text" />
                </div>
              </div>
              <div class="field has-text-left">
                <label class="label">Amount</label>
                <div class="control">
                  <input
                    v-model="amount"
                    class="input is-small"
                    type="number"
                  />
                </div>
              </div>
              <div class="field has-text-left">
                <label class="label">Description</label>
                <div class="control">
                  <input
                    v-model="description"
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>
              <div class="field has-text-left">
                <label class="label">remitter_account_id</label>
                <div class="control">
                  <input
                    v-model="remitter_account_id"
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>
              <div class="field has-text-left">
                <label class="label">beneficiary_account_id</label>
                <div class="control">
                  <input
                    v-model="beneficiary_account_id"
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>
              <div class="field has-text-left">
                <label class="label">remitter_account_number</label>
                <div class="control">
                  <input
                    v-model="remitter_account_number"
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>
              <div class="field has-text-left">
                <label class="label">remitter_name</label>
                <div class="control">
                  <input
                    v-model="remitter_name"
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>
              <div class="field has-text-left">
                <label class="label">beneficiary_account_number</label>
                <div class="control">
                  <input
                    v-model="beneficiary_account_number"
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>

              <div class="field has-text-left">
                <label class="label">beneficiary_name</label>
                <div class="control">
                  <input
                    v-model="beneficiary_name"
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>

              <div class="field has-text-left">
                <label class="label">account_id</label>
                <div class="control">
                  <input
                    v-model="account_id"
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="submit">Submit</button>
        <button class="button" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchPaymentForm",
  props: {
    isModalActive: Boolean,
  },
  data() {
    return {
      isActiveDropdown: false,
      url: "https://front-end-test-assignment.fintech-market.com/api/v1/payments/search",
      auth: "Basic ZGFuYWJpamFrOmlWcFprMUMwQUZGd0RmRFY=",
      id: "",
      description: "",
      amount: 0,
      remitter_account_id: "",
      remitter_name: "",
      remitter_account_number: "",
      beneficiary_account_id: "",
      beneficiary_name: "",
      beneficiary_account_number: "",
      account_id: "",
    };
  },
  methods: {
    close() {
      this.$emit("closesearchpaymentmodal", "");
    },
    getData() {
      return {
        data: {
          id: this.id,
          amount: this.amount,
          description: this.description,
          remitter_account_id: this.remitter_account_id,
          beneficiary_account_id: this.beneficiary_account_id,
          remitter_account_number: this.remitter_account_number,
          remitter_name: this.remitter_name,
          beneficiary_account_number: this.beneficiary_account_number,
          beneficiary_name: this.beneficiary_name,
          account_id: this.account_id,
        },
      };
    },
    submit() {
      var self = this;
      let config = {
        headers: {
          Authorization: this.auth,
          accept: "application/json",
        },
      };
      axios
        .post(this.url, this.getData(), config)
        .then(function (response) {
          self.$emit("searchpayment", response.data.data);
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
