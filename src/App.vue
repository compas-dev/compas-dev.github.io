<template>
    <router-view />
</template>

<style>
.constrained {
    max-width: 1440px !important;
    margin-left: auto;
    margin-right: auto;
}
a {
    color: inherit;
}
a:hover,
a:active,
a:focus {
    color: rgb(var(--v-theme-tertiary));
}
.logo {
    filter: grayscale(1);
}
.bg-banner {
    background-image: radial-gradient(
            circle at center,
            white 0,
            rgb(255, 255, 255, 0.8) 40%,
            rgb(var(--v-theme-primary), 0.2) 100%
        ),
        url("assets/compas_background_image_bw.jpg") !important;
    background-position: center !important;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}
</style>

<script setup>
//
</script>
