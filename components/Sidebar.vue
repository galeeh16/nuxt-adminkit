<template>
    <nav id="sidebar" class="sidebar js-sidebar">
        <!-- <div class="sidebar-content js-simplebar"> -->
        <div class="sidebar-content">
            <a class="sidebar-brand" href="/">
                <span class="align-middle">AdminKit</span>
            </a>

            <ul class="sidebar-nav">
                <li class="sidebar-header">
                    Pages
                </li>

                <!-- <template v-for="link in links" :key="link.id">
                    <li class="sidebar-item" :class="{ 'active': link.url == route.path }">
                        <NuxtLink class="sidebar-link" :to="link.url">
                            <Icon :name="link.icon" size="18" /> <span class="align-middle">{{
                                link.name }}</span>
                        </NuxtLink>
                    </li>
                </template> -->

                <Menu />
            </ul>
        </div>
    </nav>
</template>

<script setup>
const route = useRoute();

const links = [
    {
        id: 1,
        name: 'Dashboard',
        url: '/home',
        icon: 'bi:grid'
    },
    {
        id: 2,
        name: 'Profile',
        url: '/profile',
        icon: 'bi:person-plus'
    },
    {
        id: 3,
        name: 'About',
        url: '/about',
        icon: 'bi:stack'
    }
];
</script>