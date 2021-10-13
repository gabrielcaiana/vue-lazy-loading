<template>
  <section>
    <Products :products="products" :filters="filters" @set-filters="load" />
  </section>
</template>

<script>
import Products from '@/components/Products';
import { onMounted, reactive, ref } from 'vue';
export default {
  components: { Products },
  setup() {
    const products = ref([]);

    const filters = reactive({
      search: '',
      sort: '',
      page: 1
    });

    const load = async (filter) => {
      filters.search = filter.search;
      filters.sort = filter.sort;
      const arr = [];

      if (filters.search) {
        arr.push(`s=${filters.search}`);
      }

      if (filters.sort) {
        arr.push(`sort=${filters.sort}`);
      }

      const response = await fetch(
        `http://localhost:8000/api/products/backend?${arr.join('&')}`
      );

      try {
        if (response.ok && response.status === 200) {
          const content = await response.json();
          products.value = content.data;
        }
      } catch (err) {
        throw Error(err);
      }
    };

    onMounted(() => load(filters));

    return {
      products,
      filters,
      load,
    };
  },
};
</script>
>
