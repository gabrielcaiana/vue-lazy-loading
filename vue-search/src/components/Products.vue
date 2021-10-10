<template>
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
      </div>
    </article>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
