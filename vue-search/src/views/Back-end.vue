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
      value: '',
    });

    const load = async filter => {
      filters.value = filter
      const arr = []

      if(filters.value.length) {
        arr.push(`s=${filters.value}`)
      }

      const response = await fetch(`http://localhost:8000/api/products/backend?${arr.join("&")}`);

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
      load
    };
  },
};
</script>
>
