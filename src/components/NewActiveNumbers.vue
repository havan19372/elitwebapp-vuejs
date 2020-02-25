<template>
    <div class="my-tickets-container">
            <b-table
                show-empty
                stacked="md"
                :items="items"
                :fields="fields"
            >
                <template slot="live_active_numbers" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="competition_number" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>                                                         
            </b-table>
    </div>
</template>
<script>
  const items = [
      { 
          live_active_numbers:"1, 4, 6, 3, 56, 76, 24, 67, 34", 
          competition_number:"#23415"  
      },
      { 
          live_active_numbers:"103, 241, 536, 242, 74, 353, 234, 215, 111", 
          competition_number:"#24715" 
      },
      { 
          live_active_numbers:"20, 131, 535, 627, 341, 574, 353, 234, 764", 
          competition_number:"#26185" 
      },
      { 
          live_active_numbers:"12, 34, 25, 632, 524, 647, 251, 789, 647, 647", 
          competition_number:"#47382" 
      },
      { 
          live_active_numbers:"1, 4, 6, 3, 56, 76, 24, 67, 34", 
          competition_number:"#42741" 
      },
      { 
          live_active_numbers:"103, 241, 536, 242, 74, 353, 234, 215, 111", 
          competition_number:"#43728" 
      },
      { 
          live_active_numbers:"12, 34, 25, 632, 524, 647, 251, 789, 647, 647", 
          competition_number:"#17482" 
      }      
  ]
  export default {
    name: 'MyCart',
    data() {
        return {
            items: items,
            fields: [
            { key: 'live_active_numbers', label: 'Live Active Numbers', class: 'text-align-center' },
            { key: 'competition_number', label: 'Competition Number', class: 'text-align-center order-style' }
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
    width: 30%;
}
</style>
