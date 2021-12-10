<template>
  <header class="container add__city">
    <nav>
      <span>Ajouter une ville</span>
      <div class="icon__section">
        <i class="far fa-edit"></i>
        <i class="fas fa-sync"></i>
        <i class="fas fa-plus"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation",
};
</script>
<style lang="scss" scoped>
.add__city {
  background-color: #f29100;
}
header {
  nav {
    display: flex;
    color: #fff;
    padding: 30px 0;
    justify-content: space-between;
  }
  .icon__section {
      i {
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