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
      s: '',
    });

    const load = async filter => {
      filters.s = filter
      const arr = []

      if(filters.s.length) {
        arr.push(`s=${filters.s}`)

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

      console.log(filters.value)
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
