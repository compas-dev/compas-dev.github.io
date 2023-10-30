<template>
    <v-container class="pb-16 mb-16">
        <v-row class="mt-16">
            <v-col cols="12" class="text-center">
                <h1 class="text-h1 text-primary">COMPAS.dev</h1>
                <v-responsive max-width="720px" class="mx-auto">
                    <p class="text-h4 font-weight-regular text-grey mt-8">
                        The Computational Framework for Research and
                        Collaboration in Architecture, Engineering, Fabrication,
                        and Construction.
                    </p>
                </v-responsive>
            </v-col>
        </v-row>

        <v-row class="mt-8 mb-8">
            <v-col cols="12" class="d-flex flex-row justify-center">
                <v-btn
                    flat
                    class="bg-primary text-white mx-2"
                    :to="{ name: 'Start' }"
                >
                    Get Started
                </v-btn>
                <v-btn
                    flat
                    class="bg-grey-lighten-3 text-grey-darken-2 mx-2"
                    :to="{ name: 'Packages' }"
                >
                    Packages
                </v-btn>
                <v-btn
                    flat
                    class="bg-grey-lighten-3 text-grey-darken-2 mx-2"
                    :to="{ name: 'Workflows' }"
                >
                    Workflows
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="mb-16 justify-center">
            <p>
                Current version 2.0.0
                <v-icon size="4" class="mx-2 text-grey">
                    fa-solid fa-circle
                </v-icon>
                <a href="https://www.github.com/compas-dev" class="text-primary"
                    >Github</a
                >
                <v-icon size="4" class="mx-2 text-grey">
                    fa-solid fa-circle
                </v-icon>
                <a href="https://pypi.org/project/COMPAS/" class="text-primary"
                    >PyPI</a
                >
                <v-icon size="4" class="mx-2 text-grey">
                    fa-solid fa-circle
                </v-icon>
                <a
                    href="https://anaconda.org/conda-forge/compas"
                    class="text-primary"
                    >conda-forge</a
                >
            </p>
        </v-row>

        <v-row class="py-16 my-16 justify-center">
            <v-col cols="12" md="3">
                <v-card flat>
                    <v-card-title>Property 1</v-card-title>
                    <v-card-text class="text-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, diam quis aliquam tincidunt, enim nisl
                        aliquet velit, quis ultricies eros massa ut nisl.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card flat>
                    <v-card-title>Property 2</v-card-title>
                    <v-card-text class="text-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, diam quis aliquam tincidunt, enim nisl
                        aliquet velit, quis ultricies eros massa ut nisl.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="3">
                <v-card flat>
                    <v-card-title>Property 3</v-card-title>
                    <v-card-text class="text-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, diam quis aliquam tincidunt, enim nisl
                        aliquet velit, quis ultricies eros massa ut nisl.
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- <v-col cols="12" md="3">
                <v-card flat>
                    <v-card-title>Property 4</v-card-title>
                    <v-card-text class="text-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, diam quis aliquam tincidunt, enim nisl
                        aliquet velit, quis ultricies eros massa ut nisl.
                    </v-card-text>
                </v-card>
            </v-col> -->
        </v-row>

        <v-row class="my-16">
            <v-col cols="12">
                <h1 class="text-h3 text-center">
                    Computation in AEC made easy.
                </h1>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="6">
                <h2 class="text-h4 mb-4">Feature 1</h2>
                <p class="text-h6 font-weight-regular text-grey mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias quo iure dolore, magnam cumque minus ut blanditiis
                    error unde, tempore eum minima saepe dolorem voluptatibus
                    molestiae iusto veniam est ab.
                </p>
                <v-btn flat class="bg-primary text-white">More</v-btn>
            </v-col>
            <v-col cols="12" md="6">
                <v-responsive
                    max-width="1600px"
                    max-height="900px"
                    :aspect-ratio="16 / 9"
                >
                    <div class="bg-grey-lighten-4 w-100 h-100"></div>
                </v-responsive>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="6">
                <v-responsive
                    max-width="1600px"
                    max-height="900px"
                    :aspect-ratio="16 / 9"
                >
                    <div class="bg-grey-lighten-4 w-100 h-100"></div>
                </v-responsive>
            </v-col>
            <v-col cols="12" md="6">
                <h2 class="text-h4 mb-4">Feature 2</h2>
                <p class="text-h6 font-weight-regular text-grey mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias quo iure dolore, magnam cumque minus ut blanditiis
                    error unde, tempore eum minima saepe dolorem voluptatibus
                    molestiae iusto veniam est ab.
                </p>
                <v-btn flat class="bg-primary text-white">More</v-btn>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="6">
                <h2 class="text-h4 mb-4">Feature 3</h2>
                <p class="text-h6 font-weight-regular text-grey mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias quo iure dolore, magnam cumque minus ut blanditiis
                    error unde, tempore eum minima saepe dolorem voluptatibus
                    molestiae iusto veniam est ab.
                </p>
                <v-btn flat class="bg-primary text-white">More</v-btn>
            </v-col>
            <v-col cols="12" md="6">
                <v-responsive
                    max-width="1600px"
                    max-height="900px"
                    :aspect-ratio="16 / 9"
                >
                    <div class="bg-grey-lighten-4 w-100 h-100"></div>
                </v-responsive>
            </v-col>
        </v-row>

        <v-row class="mt-16 pt-16">
            <v-col cols="12">
                <h1 class="text-h3 text-center">Sponsors</h1>
            </v-col>
        </v-row>

        <v-row class="my-16 justify-center">
            <v-btn
                v-for="item in sponsors"
                :key="item.name"
                :href="item.link"
                target="_blank"
                variant="plain"
                density="compact"
                class="pa-0 ma-4 logo"
            >
                <img :src="item.logo" height="24" :alt="item.name" />
            </v-btn>
        </v-row>
    </v-container>
</template>

<style>
.logo {
    filter: grayscale(1);
}
</style>

<script>
export default {
    data: () => ({}),
    computed: {
        sponsors() {
            return this.$store.state.sponsors;
        },
    },
};
</script>
