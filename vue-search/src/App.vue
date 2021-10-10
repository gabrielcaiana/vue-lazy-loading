<template>
  <div class="bg-gray-100">
    <Header />
    <main class="h-screen">
      <div class="container mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
