<template>
  <h1 class="text-2xl font-semibold mb-4">Login</h1>

  <form action="#" method="POST">
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        v-model="clavem"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <div class="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
      <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
    </div>

    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>

    <button
      @click="cumLogin"
      type="button"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Login
    </button>
  </form>

  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Sign up Here</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const clavem = ref<string>('');

const cumLogin = () => {
  if (clavem.value === 'ABC-123') {
    localStorage.setItem('userId', 'ABC-123');
  }

  const ultimoSitu = localStorage.getItem('lastPath') ?? '/';

  router.replace(ultimoSitu);
};
</script>
