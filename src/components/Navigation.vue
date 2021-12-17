<template>
  <header class="container add__city">
    <nav>
      <span>Ajouter une ville</span>
      <div class="icon__section">
        <i class="far fa-edit"></i>
        <i @click="reloadApp" class="fas fa-sync"></i>
        <i @click="addCity" class="fas fa-plus"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    addCity() {
      this.$emit('add-city');
    },
    reloadApp() {
      location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
.add__city {
  background-color: #f29100;
}
header {
  z-index: 99;
  position: fixed;
  max-width: 1024px;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  nav {
    display: flex;
    color: #fff;
    padding: 30px 0;
    justify-content: space-between;
  }
  .icon__section {
    i {
      cursor: pointer;
      font-size: 20px;
    }
    i:nth-child(2),
    i:nth-child(3) {
      margin-left: 20px;
    }
  }
  span {
    font-weight: 600;
  }
}
</style>