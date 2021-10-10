<template>
  <section>
    <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
      <Products
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </section>
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
