<template>
  <section>
      <Products :products="products"/>
  </section>
</template>

<script>
import Products from '@/components/Products.vue';
import { onBeforeMount, ref } from 'vue';
export default {
  components: { Products },
  setup() {
    const products = ref([]);

    onBeforeMount(async () => {
      const response = await fetch(
        'http://localhost:8000/api/products/backend'
      );

      try {
        if (response.ok && response.status === 200) {
          const content = await response.json();
          products.value = content.data;
        }
      } catch (err) {
        throw Error(err);
      }
    });

    return {
      products,
    };
  },
};
</script>
>
