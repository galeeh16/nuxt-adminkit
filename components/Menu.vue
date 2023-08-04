<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <MenuItem v-for="(item, index) in menuTree" :key="index" :data="item.children" :label="item.label" :icon="item.icon"
      :depth="0" :smallMenu="smallMenu" />
    <!-- <i @click="smallMenu = !smallMenu" class="material-icons">menu</i> -->
  </div>
</template>
  
<script>
import MenuItem from './MenuItem.vue';

export default {
  name: 'recursive-menu',
  data: () => ({
    smallMenu: false,
    menuTree: [
      {
        label: "Home",
        icon: "bi:grid",
        children: [
          {
            label: "level 1.1",
            children: [
              {
                label: "level 1.1.1",
                children: [
                  {
                    label: "level 1.1.1.1"
                  }
                ]
              }
            ]
          },
          {
            label: "level 1.2"
          }
        ]
      },
      {
        label: "Dashboard",
        icon: "bi:grid",
        children: [
          {
            label: "level 2.1",
          },
          {
            label: "level 2.2"
          },
          {
            label: "level 2.3"
          }
        ]
      },
      {
        label: "Settings",
        icon: "bi:stack"
      }
    ]
  }),
  components: {
    MenuItem
  }
}
</script>
  
<style scoped>
.menu {
  position: relative;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
  overflow: auto;
}

.menu i {
  position: relative;
  left: 250px;
  font-size: 20px;
  top: 15px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu.small-menu {
  overflow: inherit;
  width: 60px;
  padding-top: 50px;
}

.menu.small-menu i {
  left: 20px;
}
</style>