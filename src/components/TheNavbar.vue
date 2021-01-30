<template>
    <nav class="navbar">
        <div class="logo">
            <h1>Megabooks</h1>
        </div>
        <div class="buttons" v-if="this.authUser"> 
            <TheLogoutButtons v-bind:authUser="this.authUser"/>
        </div>
        <div class="buttons" v-else>
            <TheLoginButtons />
        </div>
    </nav>
</template>

<script>
import TheLoginButtons from "@/components/TheLoginButtons.vue";
import TheLogoutButtons from "@/components/TheLogoutButtons.vue";
export default {
    components: {
        TheLoginButtons,
        TheLogoutButtons
    },
    props: ["authUser"]
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    background-color: rgb(15, 65, 35);
    padding: 0 2rem;
    color: bisque;
    box-shadow: 0px 10px 18px #000;
}
.buttons {
  display: flex;
  align-items: center;
}
h1 {
    font-size: 1.6rem;
}
</style>