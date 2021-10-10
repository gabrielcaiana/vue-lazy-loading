<template>
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
        <h3 class="text-sm text-gray-500 pb-2">
          {{ product.title }}
        </h3>
        <p
          class="
            text-base
            font-semibold
            text-gray-900
            group-hover:text-indigo-600
          "
        >
          {{ product.description }}
        </p>
        <span class="text-gray-500">{{ `R$:${product.price}` }}</span>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: true,
    },
  },
};
</script>
