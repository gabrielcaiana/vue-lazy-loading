<template>
  <div>
    <ul class="w-screen flex justify-center py-4 mb-10 bg-white">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="px-2 cursor-pointer text-gray-400"
      >
        <router-link :to="menu.path">
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: 'Front-end', path: '/front-end' },
        { name: 'Back-end', path: '/back-end' },
      ],
    };
  },
};
</script>

<style>
.active {
 @apply text-green-400;
}
</style>
