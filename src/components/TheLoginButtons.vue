<template>
    <div class="items">
        <router-link :to="`Register`">
            <span>Register</span>
        </router-link>
        <router-link :to="`Login`">
            <span>Login</span>
        </router-link>
    </div>
</template>

<style scoped>
.items {
    display: flex;
}
a {
    text-decoration: none;
    padding: 0 0.5rem;
    font-size: 1.4rem;
    padding-right: 1.5rem;
    color: bisque;
}
a:hover {
    text-decoration: underline;
}
</style>