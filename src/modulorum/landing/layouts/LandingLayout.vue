<template>
  <div class="h-screen flex flex-col">
    <header class="flex items-center h-14 sm:h-16 px-4 md:px-6 lg:px-8 border-b border-gray-300">
      <div>
        <a href="#">
          <img src="@/assets/logo.svg" width="40" height="40" alt="" />
        </a>
      </div>
      <nav class="ml-auto flex flex-col items-end">
        <div class="space-x-4">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink to="/features">Features</RouterLink>
          <RouterLink to="/pricing">Pricing</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>

        <div class="space-x-4">
          <RouterLink to="/pokmeon/1">Pokemons</RouterLink>
          <RouterLink to="/auth">Login</RouterLink>
        </div>
      </nav>
    </header>
    <main class="flex-1 flex items-center justify-center py-6">
      <RouterView />
    </main>

    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear }} Acme Corporation. Derechos reservados
      </p>
    </footer>
  </div>
</template>
