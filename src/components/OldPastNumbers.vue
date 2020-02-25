<template>
    <div class="my-tickets-container">
            <b-table
                show-empty
                stacked="md"
                :items="items"
                :fields="fields"
            >  
                <template slot="competition_title" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>
                <template slot="image" slot-scope="row">
                    <b-img :src=row.value height="50" width="50" center/>
                </template>
                <template slot="number" slot-scope="row">
                    <p>{{ row.value }}</p>
                </template>                                                      
            </b-table>
    </div>
</template>
<script>
  const items = [
      { 
          competition_title:"compet 1", 
          image:require('@/assets/competitions/competition1.jpg'),
          number:153
      },
      { 
          competition_title:"compet 2", 
          image:require('@/assets/competitions/competition2.jpg'),
          number:206
      },
      { 
          competition_title:"compet 3", 
          image:require('@/assets/competitions/competition3.jpg'),
          number:33 
      },
      { 
          competition_title:"compet 4", 
          image:require('@/assets/competitions/competition4.jpg'),
          number:23 
      },
      { 
          competition_title:"compet 5", 
          image:require('@/assets/competitions/competition5.jpg'),
          number:50
      },
      { 
          competition_title:"compet 6", 
          image:require('@/assets/competitions/competition6.jpg'),
          number:79 
      },
      { 
          competition_title:"compet 7", 
          image:require('@/assets/competitions/competition7.jpg'),
          number:90
      },
      { 
          competition_title:"compet 8", 
          image:require('@/assets/competitions/competition8.jpg'),
          number:83 
      },
      { 
          competition_title:"compet 9", 
          image:require('@/assets/competitions/competition9.jpg'),
          number:106 
      },
      { 
          competition_title:"compet 10", 
          image:require('@/assets/competitions/competition10.jpg'),
          number:125 
      }      
  ]
  export default {
    name: 'MyCart',
    data() {
        return {
            items: items,
            fields: [
            { key: 'competition_title', label: 'competition title', class: 'text-align-center' },
            { key: 'image', label: 'competition image', class: 'text-align-center' },
            { key: 'number', label: 'number', class: 'text-align-center' },
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
