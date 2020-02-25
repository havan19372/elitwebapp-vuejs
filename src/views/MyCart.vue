<template>
    <b-container fluid>
        <b-container>
            <h2 class="page-title">my shopping cart</h2>
            <b-table
                show-empty
                stacked="md"
                :items="items"
                :fields="fields"
            >
                <template slot="image" slot-scope="row">
                    <b-img :src=row.value height="150" center/>
                </template>
                <template slot="competition_title" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="price_per_ticket" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="quantity" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="total" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>                                                           
            </b-table>
            <div class="checkout-section">
              <div>
                <p>Total cost: <span>375</span></p>                  
                <b-button class="common-button icon-button" style="color: #dc3545 !important;" to="/my-cart">
                    <span class="text-color-red">checkout</span>
                    <font-awesome-icon icon="pound-sign" class="text-color-red"/>
                </b-button>
              </div>
            </div>
        </b-container>
    </b-container>
</template>
<script>
  const items = [
      { 
          image:require('@/assets/competitions/competition1.jpg'), 
          competition_title:"compet 1", 
          price_per_ticket:23, 
          quantity:37, 
          total:380 
      },
      { 
          image:require('@/assets/competitions/competition2.jpg'), 
          competition_title:"compet 1", 
          price_per_ticket:23, 
          quantity:37, 
          total:380 
      },
      { 
          image:require('@/assets/competitions/competition3.jpg'), 
          competition_title:"compet 1", 
          price_per_ticket:23, 
          quantity:37, 
          total:380 
      },
      { 
          image:require('@/assets/competitions/competition4.jpg'), 
          competition_title:"compet 1", 
          price_per_ticket:23, 
          quantity:37, 
          total:380 
      }      
  ]
  export default {
    name: 'MyCart',
    data() {
        return {
            items: items,
            fields: [
            { key: 'image', label: 'competition image', class: 'text-align-center' },
            { key: 'competition_title', label: 'competition title', class: 'text-align-center' },
            { key: 'price_per_ticket', label: 'price per ball (£ GBP)', class: 'text-align-center' },
            { key: 'quantity', label: 'quantity', class: 'text-align-center' },
            { key: 'total', label: 'total', class: 'text-align-center' }
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
</style>
