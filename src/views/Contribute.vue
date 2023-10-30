<template>
    <v-container class="pb-16 mb-16">
        <v-row class="mt-8 mb-16">
            <v-col cols="12" class="text-center">
                <h1 class="text-h2 text-primary">Contribute</h1>
                <v-responsive max-width="720px" class="mx-auto">
                    <p class="text-h5 font-weight-regular text-grey mt-8">
                        COMPAS is an open source and community-driven project.
                        We welcome contributions of all kinds, from code to
                        documentation, to design and more.
                    </p>
                </v-responsive>
            </v-col>
        </v-row>
        <v-row class="my-16">
            <v-col
                cols="12"
                md="4"
                v-for="(item, i) in contributions"
                :key="i"
                class="mb-4"
            >
                <v-card flat :border="true" rounded="0">
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-text class="text-grey-darken-2">
                        {{ item.description }}
                    </v-card-text>
                    <v-card-actions
                        v-for="(action, j) in item.actions"
                        :key="j"
                    >
                        <v-btn flat :href="action.link">{{
                            action.title
                        }}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        contributions: [
            {
                title: "Code",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Documentation",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Forum",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Tutorials",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Examples",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Stars",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Donations",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
        ],
    }),
};
</script>
