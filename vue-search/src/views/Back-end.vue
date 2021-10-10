<template>
  <section>
    <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
      <Products />
    </section>
  </section>
</template>

<script>
import Products from '@/components/Products.vue';
import { onMounted, ref } from 'vue';
export default {
  components: { Products },
  setup() {
    const products = ref([]);

    onMounted(async () => {
      const response = await fetch('http://localhost:8000/api/products/backend');

      try {
        if (response.ok && response.status === 200) {
          const content = await response.json();
          products.value = content;
        }
      } catch (err) {
        throw Error(err)
      }
    });

    return {
      products
    }
  },
};
</script>
>
