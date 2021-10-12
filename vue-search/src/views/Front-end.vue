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
      s: '',
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
      filters.s = filter;

      let products = allProducts.value.filter(
        (product) =>
          product.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 ||
          product.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0
      );

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
