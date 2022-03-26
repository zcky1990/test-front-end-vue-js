<template>
  <section class="container is-fullheight">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="table-container">
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th><abbr title="Id">Id</abbr></th>
                  <th><abbr title="Amount">Amount</abbr></th>
                  <th><abbr title="Description">Description</abbr></th>
                  <th>
                    <abbr title="Remitter Account Id">Remitter Account Id</abbr>
                  </th>
                  <th>
                    <abbr title="Beneficiary Account Id"
                      >Beneficiary Account Id</abbr
                    >
                  </th>
                  <th>
                    <abbr title="Remitter Account Number"
                      >Remitter Account Number</abbr
                    >
                  </th>
                  <th><abbr title="Remitter Name">Remitter Name</abbr></th>
                  <th>
                    <abbr title="Beneficiary Account Number"
                      >Beneficiary Account Number</abbr
                    >
                  </th>
                  <th>
                    <abbr title="Beneficiary Name">Beneficiary Name</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="payment in paymentlist" :key="`${payment.id}`">
                  <td>{{ payment.id }}</td>
                  <td>{{ payment.amount }}</td>
                  <td>{{ payment.description }}</td>
                  <td>{{ payment.remitter_account_id }}</td>
                  <td>{{ payment.beneficiary_account_id }}</td>
                  <td>{{ payment.remitter_account_number }}</td>
                  <td>{{ payment.remitter_name }}</td>
                  <td>{{ payment.beneficiary_account_number }}</td>
                  <td>{{ payment.beneficiary_name }}</td>
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
  name: "PaymentTableList",
  props: ["paymentlist"],
  methods: {},
};
</script>

<style scoped>
</style>
