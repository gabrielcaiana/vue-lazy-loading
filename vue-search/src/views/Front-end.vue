<template>
  <section>
    <Products
      :products="filteredProducts"
      :filters="filters"
      @set-filters="filteredChanged"
    />
  </section>
</template>

<script>
import Products from '@/components/Products.vue';
import { onMounted, reactive, ref } from 'vue';
export default {
  components: { Products },

  setup() {
    const allProducts = ref([]);
    const filteredProducts = ref([]);

    const filters = reactive({
      search: '',
      sort: '',
      page: 1
    });

    onMounted(async () => {
      const response = await fetch(
        'http://localhost:8000/api/products/frontend'
      );

      try {
        if (response.ok && response.status === 200) {
          const content = await response.json();

          allProducts.value = content;
          filteredProducts.value = content;
        }
      } catch (err) {
        throw Error(err);
      }
    });

    const filteredChanged = (filter) => {
      filters.search = filter.search;
      filters.sort = filter.sort;

      let products = allProducts.value;
      
      if(filters.search !== undefined) {
         products = products.filter((product) => {
          return product.title.toLowerCase().indexOf(filters.search.toLowerCase()) >=0 ||
               product.description.toLowerCase().indexOf(filters.search.toLowerCase()) >= 0
        })
      }

      if(filters.sort === "asc" || filters.sort === "desc") {
        products.sort((a,b) => {
          const diff = a.price -b.price
          
          if(diff === 0) return 0

          const sign = Math.abs(diff) / diff

          return filters.sort === "asc" ? sign : -sign
        })
      }
        
      filteredProducts.value = products;
    };

    return {
      filteredProducts,
      filters,
      filteredChanged,
    };
  },
};
</script>
>
