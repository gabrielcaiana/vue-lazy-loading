<template>
  <div>
    <Search @key-event="keyEvent" />
    <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      <article
        class="
          bg-white
          group
          relative
          rounded-lg
          overflow-hidden
          shadow-lg
          hover:shadow-2xl
          transform
          duration-200
          cursor-pointer
        "
        v-for="product in products"
        :key="product.id"
      >
        <div class="relative w-full h-80 md:h-64 lg:h-44">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div class="px-3 py-4">
          <h1 class="text-sm text-gray-500 pb-2">
            {{ product.title }}
          </h1>
          <span class="text-gray-500">{{ `R$${product.price}` }}</span>
        </div>
      </article>
    </section>
    <div class="w-full flex items-center justify-center py-10">
      <button
        class="
          p-2
          pl-5
          pr-5
          transition-colors
          duration-700
          transform
          bg-green-500
          hover:bg-green-400
          text-gray-100 text-lg
          rounded-lg
          focus:border-4
          border-indigo-300
        "
      >
        Carregar mais
      </button>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
export default {
  props: {
    products: {
      type: Object,
      required: true,
    },
    filters: {
      type: Object,
    },
  },

  components: {
    Search,
  },

  emits: ['set-filters'],

  setup(props, { emit }) {
    const keyEvent = (e) => {
      emit('set-filters', {
        search: e.search,
        sort: e.sort,
      });
    };

    return {
      keyEvent,
    };
  },
};
</script>
