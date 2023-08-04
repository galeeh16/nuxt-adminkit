<template>
    <div class="wrapper">
        <Sidebar />

        <div class="main">
            <Navbar />

            <main class="content">
                <div class="container-fluid p-0">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<style>
@import url('/assets/css/app.css');
</style>

<script setup>
import '@vueform/multiselect/themes/default.css';

useHead({
    script: [
        {
            src: '/assets/js/app.js'
        }
    ]
});
</script>