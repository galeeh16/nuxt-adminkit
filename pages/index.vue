<template>
    <div class="container-login">
        <div class="left">
            <div class="login-form">
                <h1>Login to your account</h1>
                <p class="text">Welcome back to our application</p>

                <form method="post" name="form-login" action="/home">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" class="input" spellcheck="false">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" class="input" spellcheck="false">
                    </div>

                    <div>
                        <button type="submtit" class="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false,
});

useHead({
    title: 'Login',
});
</script>

<style scoped>
@import url('/assets/custom/login.css');
</style>