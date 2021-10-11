<template>
  <section>
    <Products :products="products" :filters="filters" />
  </section>
</template>

<script>
import Products from '@/components/Products.vue';
import { onBeforeMount, reactive, ref } from 'vue';
export default {
  components: { Products },

  setup() {
    const products = ref([]);

      const filters = reactive({
      s: ""
    })

    onBeforeMount(async () => {
      const response = await fetch(
        'http://localhost:8000/api/products/frontend'
      );

      try {
        if (response.ok && response.status === 200) {
          const content = await response.json();
          products.value = content;
          console.log(products.value)
        }
      } catch (err) {
        throw Error(err);
      }
    });

    return {
      products,
      filters
    };
  },
};
</script>
>
