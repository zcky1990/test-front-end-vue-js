<template>
  <div class="about">
    <SearchPaymentForm
      :is-modal-active="isModalSearchPaymentOpen"
      @searchpayment="searchPayment"
      @closesearchpaymentmodal="closeSearchPaymentModal"
    />
    <PaymentForm
      :is-modal-active="isModalAddPaymentOpen"
      @addpayment="addPayment"
      @closeaddpaymentmodal="closeAddPaymentModal"
    />
    <div class="container">
      <div class="columns">
        <div class="column is-half has-text-left">
          <h1 class="title">Payment</h1>
        </div>
        <div class="column is-half">
          <div class="columns">
            <div class="column is-8 has-text-left"></div>
            <div class="column is-2 has-text-left">
              <button class="button" @click="openSearchPaymentModal">
                search
              </button>
            </div>
            <div class="column is-2 has-text-left">
              <button class="button" @click="openPaymentModal">Add</button>
            </div>
          </div>
        </div>
      </div>
      <PaymentTableList :paymentlist="payemntList" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentTableList from "@/components/PaymentTableList.vue";
import PaymentForm from "@/components/PaymentForm.vue";
import SearchPaymentForm from "@/components/SearchPaymentForm.vue";

export default {
  name: "PaymentView",
  components: {
    PaymentTableList,
    PaymentForm,
    SearchPaymentForm,
  },
  data() {
    return {
      searchvalue: "",
      selectedId: "",
      payemntList: [
       
      ],
      isModalAddPaymentOpen: false,
      isModalSearchPaymentOpen: false,
    };
  },
  methods: {
    openPaymentModal() {
      this.isModalAddPaymentOpen = true;
    },
    closeAddPaymentModal() {
      this.isModalAddPaymentOpen = false;
    },
    openSearchPaymentModal() {
      this.isModalSearchPaymentOpen = true;
    },
    closeSearchPaymentModal() {
      this.isModalSearchPaymentOpen = false;
    },
    addPayment(data) {
      this.payemntList.push(data);
      this.closeAddPaymentModal();
    },
    searchPayment(data) {
      this.payemntList = data;
      this.closeSearchPaymentModal();
    },
  },
};
</script>