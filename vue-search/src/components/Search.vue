<template>
  <div
    class="
      flex
      items-center
      justify-center
      p-6
      mb-10
      space-x-6
      bg-white
      rounded-xl
      shadow-lg
      hover:shadow-xl
      transform
      hover:scale-105
      transition
      duration-500
    "
  >
    <div class="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 opacity-30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        @keyup="search($event.target.value)"
        class="bg-gray-100 outline-none w-full"
        type="text"
        placeholder="Procurar produto..."
      />
    </div>
    <div class="w-60">
      <select
        class="
          block
          w-full
          bg-grey-lighter
          text-grey-darker
          border border-grey-lighter
          rounded-lg
          h-12
          px-4
        "
        @change="sort($event.target.value)"
      >
        <option>Selecionar</option>
        <option value="asc">Menor preço</option>
        <option value="desc">Maior preço</option>
      </select>
      <p class="text-sm text-red-500 hidden mt-3" id="error">
        Please fill out this field.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  emits: ['key-event'],
  setup(props, { emit }) {
    function search(search) {
      emit('key-event', {
        page: 1,
        search,
        ...props.filters,
      });
    }

    const sort = (sort) => {
      emit('key-event', {
        page: 1,
        sort,
        ...props.filters,
      });
    };

    return {
      search,
      sort,
    };
  },
};
</script>
