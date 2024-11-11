<template>
  <div class="app-container">
    <header>
      <NuxtLink class="site-name" to="/"><span class="my-logo">My</span>Ecommerce</NuxtLink>
      <ClientOnly>
        <FilterComponent></FilterComponent>
      </ClientOnly>
    </header>
    
    <div class="page-container">
      <NuxtPage />
    </div>

    <footer>
      <p>&copy; 2024 My-Ecommerce</p>
    </footer>
  </div>
</template>


<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  width: 100%;
  height: auto;
  padding: 10px 0 20px 10px;
  top: 0px;
  background: #2c3e50;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

footer {

  width: 100%;
  top: 100vh;
  padding: 10px;
  text-align: center;
  background: lightgray;
}

.site-name {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.my-logo {
  background: #e74c3c;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 1px 1px 15px;
  margin-right: 7px;
}

.page-container {
  flex: 1;
}
</style>
