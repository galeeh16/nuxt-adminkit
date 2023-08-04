<template>
  <div class="menu-item" :class="{ opened: expanded }">
    <div class="label" @click="toggleMenu()" :style="{ paddingLeft: depth * 20 + 20 + 'px' }">
      <div class="left">
        <!-- <i v-if="icon" class="material-icons-outlined">{{ icon }}</i> -->
        <Icon :name="icon" />
        <span v-if="showLabel">{{ label }}</span>
      </div>
      <div v-if="data" class="right">
        <Icon class="expand material-icons" :class="{ opened: expanded }" name="bi:chevron-right" />
      </div>
    </div>
    <div v-show="showChildren" :class="{ 'small-menu': smallMenu }" class="items-container"
      :style="{ height: containerHeight }" ref="container">
      <menu-item :class="{ opened: showChildren }" v-for="(item, index) in data" :key="index" :data="item.children"
        :label="item.label" :icon="item.icon" :depth="depth + 1" :smallMenu="smallMenu" />
    </div>
  </div>
</template>
  
<script>
export default {
  name: "menu-item",
  data: () => ({
    showChildren: false,
    expanded: false,
    containerHeight: 0,
  }),
  props: {
    data: {
      type: Array,
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    depth: {
      type: Number,
    },
    smallMenu: {
      type: Boolean,
    },
  },
  computed: {
    showLabel() {
      return this.smallMenu ? this.depth > 0 : true;
    }
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
      if (!this.showChildren) {
        this.showChildren = true;
        this.$nextTick(() => {
          this.containerHeight = this.$refs["container"].scrollHeight + "px";
          setTimeout(() => {
            this.containerHeight = "fit-content";
            if (navigator.userAgent.indexOf("Firefox") != -1)
              this.containerHeight = "-moz-max-content"
            this.$refs["container"].style.overflow = "visible";
          }, 300);
        });
      } else {
        this.containerHeight = this.$refs["container"].scrollHeight + "px";
        this.$refs["container"].style.overflow = "hidden";
        setTimeout(() => {
          this.containerHeight = 0 + "px";
        }, 10);
        setTimeout(() => {
          this.showChildren = false;
        }, 300);
      }
    },
  },
};
</script>
  
<style scoped>
.menu-item {
  position: relative;
  width: 100%;
}

.menu-item .label {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;
  user-select: none;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #cbd3da;
  transition: all 0.2s ease;
}

.menu-item .label>div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-item .label i {
  font-size: 20px;
  color: #6e6e6e;
  transition: all 0.2s ease;
}

.menu-item .label i.expand {
  font-size: 16px;
  color: #dedfe6;
}

.menu-item .label i.expand.opened {
  transform: rotate(180deg);
}

.menu-item .label.small-item {
  width: fit-content;
}

.menu-item .label:hover {
  background: rgba(112, 72, 212, .3);
  cursor: pointer;
}

.menu-item .items-container {
  width: 100%;
  left: calc(100% + 6px);
  transition: height 0.3s ease;
  overflow: hidden;
}

.menu-item .items-container.small-menu {
  width: fit-content;
  position: absolute;
  background: #fff;
  box-shadow: 0 0 10px #ebebeb;
  top: 0;
}

.menu-item .items-container.small-menu .label {
  width: 100% !important;
  padding-left: 20px !important;
}
</style>
  