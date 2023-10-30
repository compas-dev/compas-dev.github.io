<template>
    <v-container class="pb-16 mb-16">
        <v-row class="mt-8">
            <v-col cols="12" class="text-center">
                <h1 class="text-h2 text-primary">COMPAS Association</h1>
                <v-responsive max-width="720px" class="mx-auto">
                    <p class="text-h5 font-weight-regular text-grey mt-8">
                        Ensuring a complete, free, open source, and
                        cross-platform computational framework for
                        interdisciplinary research and collaboration in AEC.
                    </p>
                </v-responsive>
            </v-col>
        </v-row>

        <v-row class="mt-8 mb-16">
            <v-col cols="12" class="d-flex flex-row justify-center">
                <v-btn flat class="bg-primary text-white mx-2" href="#">
                    Join the Association
                </v-btn>
                <v-btn
                    flat
                    class="bg-grey-lighten-3 text-grey-darken-2 mx-2"
                    href="#"
                >
                    Donate :)
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="10" class="mx-auto">
                <h2 class="text-h4 text-none">About Us</h2>
                <p class="text-h6 text-grey-darken-2 font-weight-regular mt-8">
                    The COMPAS Association is an independent public benefit
                    organisation founded on March 2023 in Zurich, Switzerland,
                    with the purpose to provide a complete, free, open source,
                    and cross-platform computational framework for
                    interdisciplinary research and collaboration in the
                    Architecture, Engineering and Construction industry, managed
                    by public projects on compas.dev.
                </p>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="10" class="mx-auto">
                <h2 class="text-h4 text-none">Our Goals</h2>
                <ul
                    class="text-h6 text-grey-darken-2 font-weight-regular mt-8 pl-8"
                >
                    <li>
                        Maintain and further develop the core library of COMPAS.
                    </li>
                    <li>
                        Maintain and further develop the core extensions of
                        COMPAS.
                    </li>
                    <li>
                        Ensure the continued availability of the core library
                        with a permissive open source licence.
                    </li>
                    <li>
                        Maintain the technical infrastructure required for the
                        development and deployment of COMPAS.
                    </li>
                    <li>
                        Provide support for development of 3rd party extensions.
                    </li>
                    <li>
                        Organise events and meetups for the academic community
                        and professional practice.
                    </li>
                    <li>
                        Promote the adoption of COMPAS in academia and
                        professional practice through the publication of
                        educational materials, workshops and other outreach
                        activities.
                    </li>
                </ul>
                <p class="text-h6 text-grey-darken-2 font-weight-regular mt-8">
                    Read the
                    <a href="#" target="_blank" class="text-primary"
                        >articles of association</a
                    >.
                </p>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="10" class="mx-auto">
                <h2 class="text-h4 text-none">Our Mission</h2>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="10" class="mx-auto">
                <v-row>
                    <v-col
                        cols="12"
                        md="4"
                        v-for="(item, index) in mission"
                        :key="index"
                    >
                        <v-card
                            flat
                            rounded="0"
                            class="d-flex flex-column align-center bg-transparent mx-4"
                        >
                            <v-avatar size="240">
                                <v-img :src="item.image" cover> </v-img>
                            </v-avatar>
                            <v-list-item>
                                <v-list-item-title
                                    class="text-wrap text-h6 text-none text-grey-darken-2 text-center mt-4"
                                >
                                    {{ item.title }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="mt-16">
            <v-col cols="12" md="10" class="mx-auto">
                <h2 class="text-h4 text-none">Become a Member</h2>
                <p class="text-h6 text-grey-darken-2 font-weight-regular mt-8">
                    Are you passionate about topics in the field of architecture
                    and digital fabrication? Then become part of an
                    international network to acquire and share knowledge and
                    expertise around the fields. Together we promote the vision
                    of a complete, free, open source, and cross-platform
                    computational framework for AEC, and become active by
                    participating in projects.
                </p>
                <p class="text-h6 text-grey-darken-2 font-weight-regular mt-8">
                    Become a member to help drive our vision forward!
                </p>
            </v-col>
        </v-row>

        <v-row class="mt-8 mb-16">
            <v-col cols="12" md="10" class="d-flex flex-row justify-center">
                <v-btn flat class="bg-primary text-white mx-2" href="#">
                    Join the Association
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="10" class="mx-auto">
                <h2 class="text-h4 text-none">The Team</h2>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="10" class="mx-auto">
                <v-row>
                    <v-col
                        cols="12"
                        md="4"
                        v-for="(item, index) in team"
                        :key="index"
                    >
                        <v-card
                            flat
                            rounded="0"
                            class="d-flex flex-column align-center bg-transparent mx-4"
                        >
                            <v-avatar size="240">
                                <v-img :src="item.image" cover> </v-img>
                            </v-avatar>
                            <v-list-item>
                                <v-list-item-title
                                    class="text-wrap text-h6 text-grey-darken-2 text-center mt-4"
                                >
                                    {{ item.name }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12" md="10" class="mx-auto">
                <h2 class="text-h4 text-none">Contact</h2>
                <p class="text-h6 text-grey-darken-2 font-weight-regular mt-8">
                    COMPAS Association
                </p>
                <p class="text-h6 text-grey-darken-2 font-weight-regular">
                    8000 Zurich
                </p>
                <p class="text-h6 text-grey-darken-2 font-weight-regular">
                    Switzerland
                </p>
                <p class="text-h6 text-grey-darken-2 font-weight-regular mt-8">
                    <a
                        href="mailto:association@compas.dev"
                        class="text-primary"
                    >
                        association@compas.dev
                    </a>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        mission: [
            {
                title: "Open and community-driven",
                image: "https://via.placeholder.com/640x360",
            },
            {
                title: "Research-oriented and industry-ready",
                image: "https://via.placeholder.com/640x360",
            },
            {
                title: "Comprehensive yet simple",
                image: "https://via.placeholder.com/640x360",
            },
        ],
        team: [
            {
                name: "Tom Van Mele",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Kathrin Dörfler",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Chen Kasirer",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Romana Rust",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Li Chen",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Gonzalo Casas",
                image: "https://via.placeholder.com/640x360",
            },
        ],
    }),
};
</script>
