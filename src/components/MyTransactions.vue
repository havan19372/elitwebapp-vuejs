<template>
    <div class="my-tickets-container">
            <h3 class="pane-title" style="text-decoration: underline;">all my transactions to date</h3>
            <b-table
                show-empty
                stacked="md"
                :items="items"
                :fields="fields"
            >
                <template slot="transaction_id" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="order_id" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="status" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="amount_paid" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="payment_method" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>                                                           
            </b-table>
    </div>
</template>
<script>
  const items = [
      { 
          transaction_id:34149488, 
          order_id:"7297c569-aac3-41a1-8b01-52013d6d0b8d", 
          status:"Success", 
          amount_paid:"£4.5", 
          payment_method:"card" 
      },
      { 
          transaction_id:34149488, 
          order_id:"7297c569-aac3-41a1-8b01-52013d6d0b8d", 
          status:"Success", 
          amount_paid:"£4.5", 
          payment_method:"card" 
      },
      { 
          transaction_id:34149488, 
          order_id:"7297c569-aac3-41a1-8b01-52013d6d0b8d", 
          status:"Success", 
          amount_paid:"£4.5", 
          payment_method:"card" 
      },
      { 
          transaction_id:34149488, 
          order_id:"7297c569-aac3-41a1-8b01-52013d6d0b8d", 
          status:"Success", 
          amount_paid:"£4.5", 
          payment_method:"card" 
      }      
  ]
  export default {
    name: 'MyCart',
    data() {
        return {
            items: items,
            fields: [
            { key: 'transaction_id', label: 'Transaction Id', class: 'text-align-center' },
            { key: 'order_id', label: 'Order Id', class: 'text-align-center order-style' },
            { key: 'status', label: 'Status', class: 'text-align-center' },
            { key: 'amount_paid', label: 'Amount paid', class: 'text-align-center' },
            { key: 'payment_method', label: 'Payment method', class: 'text-align-center' }
            ],
        }
    }
  }
</script>
<style>

.checkout-section {
    text-align: right;
}
.checkout-section div {
    width: 50%;
    display: inline-block;
    border-top: 2px solid #27FE01;
    margin: 0px 0;
    padding: 24px;
}
.checkout-section button,
.checkout-section a {
    display: inline-block !important;

}
.checkout-section p {
    color: red;
    padding: 0 14px;
}
.order-style{
    width: 60%;
}
</style>
