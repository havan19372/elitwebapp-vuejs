<template>
    <b-container fluid>
        <b-container>
            <div style="margin:0px 0px 20px 50px;" class="title-container">
                <b-img
                    :src="require('@/assets/charity2_logo.png')"
                    center
                    width="140"
                    style="display:inline-block !important;"
                />
                <h2 class="page-title">saving pets changing lives</h2>
            </div>
            <b-table
                show-empty
                stacked="md"
                :items="items"
                :fields="fields"
            >
                <template slot="date" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="deposit" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="balance" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="receipt" slot-scope="row">
                    <b-img :src=row.value height="150" center/>
                </template>
            </b-table>
        </b-container>
    </b-container>
</template>
<script>
  const items = [
      { 
          receipt:require('@/assets/receipts/receipt-01.jpg'),
          date:"May 3rd, 2018",
          deposit:4000,
          balance: 3000
      },
      { 
          receipt:require('@/assets/receipts/receipt-02.jpg'), 
          date:"May 3rd, 2018",
          deposit:4000,
          balance: 3000
      },
      { 
          receipt:require('@/assets/receipts/receipt-03.jpg'), 
          date:"May 3rd, 2018",
          deposit:4000,
          balance: 3000
      },
      { 
          receipt:require('@/assets/receipts/receipt-04.jpg'), 
          date:"May 3rd, 2018",
          deposit:4000,
          balance: 3000
      }      
  ]
  export default {
    data() {
      return {
        items: items,
        fields: [
          { key: 'date', label: 'date', class: 'text-align-center' },
          { key: 'deposit', label: 'amount deposited', class: 'text-align-center' },
          { key: 'balance', label: 'accumulating balance', class: 'text-align-center' },
          { key: 'receipt', label: 'receipt', class: 'text-align-center' }
        ],
      }
    }
  }
</script>
<style>

</style>
