<template>
  <div class="modal" v-bind:class="{ 'is-active': isModalActive }">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Payment</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="container">
              <div class="dropdown" :class="{ 'is-active': isActiveDropdown }">
                <div class="dropdown-trigger">
                  <button
                    style="width: 200px"
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    @click="setActive"
                  >
                    <span>{{ dropdownValue }}</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div
                    v-for="list in list_type_key"
                    :key="`${list}`"
                    class="dropdown-content"
                  >
                    <a
                      href="#"
                      class="dropdown-item"
                      @click="setSearchType(list)"
                    >
                      {{ list }}
                    </a>
                  </div>
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
                <label class="label">Amount</label>
                <div class="control">
                  <input
                    v-model="amount"
                    class="input is-small"
                    type="number"
                  />
                </div>
              </div>
              <div v-if="type_key == 'internal'">
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
              </div>

              <div v-if="type_key == 'incoming'">
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
                  <label class="label">remitter_account_number</label>
                  <div class="control">
                    <input
                      v-model="remitter_account_number"
                      class="input is-small"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div v-if="type_key == 'outgoing'">
                <div class="field has-text-left">
                  <label class="label">remitter_account_id</label>
                  <div class="control">
                    <input
                      v-model="beneficiary_account_id"
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
                  <label class="label">beneficiary_account_number</label>
                  <div class="control">
                    <input
                      v-model="beneficiary_account_number"
                      class="input is-small"
                      type="text"
                    />
                  </div>
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
  name: "PaymentForm",
  props: {
    isModalActive: Boolean,
  },
  data() {
    return {
      isActiveDropdown: false,
      dropdownValue: "Select Request Type",
      list_type_key: ["internal", "incoming", "outgoing"],
      url: "https://front-end-test-assignment.fintech-market.com/api/v1/payments",
      auth: "Basic ZGFuYWJpamFrOmlWcFprMUMwQUZGd0RmRFY=",
      description: "",
      amount: 0,
      type_key: "",
      remitter_account_id: "",
      remitter_name: "",
      remitter_account_number: "",
      beneficiary_account_id: "",
      beneficiary_name: "",
      beneficiary_account_number: "",
    };
  },
  methods: {
    setSearchType(value) {
      console.log(value);
      this.type_key = value;
      this.dropdownValue = value;
      this.isActiveDropdown = false;
    },
    close() {
      this.$emit("closeaddpaymentmodal", "");
    },

    setActive() {
      this.isActiveDropdown = true;
    },
    getData() {
      if (this.type_key == "internal") {
        return {
          data: {
            description: this.description,
            amount: this.amount,
            type_key: "internal",
            remitter_account_id: this.remitter_account_id,
            beneficiary_account_id: this.beneficiary_account_id,
          },
        };
      }

      if (this.type_key == "incoming") {
        return {
          data: {
            description: this.description,
            amount: this.amount,
            type_key: "incoming",
            beneficiary_account_id: this.beneficiary_account_id,
            remitter_name: this.remitter_name,
            remitter_account_number: this.remitter_account_number,
          },
        };
      }

      if (this.type_key == "outgoing") {
        return {
          data: {
            description: this.description,
            amount: this.amount,
            type_key: "incoming",
            remitter_account_id: this.remitter_account_id,
            beneficiary_name: this.beneficiary_name,
            beneficiary_account_number: this.beneficiary_account_number,
          },
        };
      }
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
          self.$emit("addpayment", response.data.data);
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
