<template>
    <router-view />
</template>

<style>
html {
    overscroll-behavior: none;
}
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
.img-fix-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    aspect-ratio: 16/10;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
}

.img-fix {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    transform: translate(-50%, -50%);
    filter: grayscale(0);
    opacity: 1;
}
</style>

<script setup>
//
</script>
