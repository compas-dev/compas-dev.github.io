<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            :title="pageTitle"
            :summary="pageSummary"
            bg-color="bg-primary"
            text-color="text-white"
            sub-text-color="text-primary-lighten-3"
        >
            <!-- <template v-slot:rows>
                <v-row class="mt-16 justify-center">
                    <v-btn
                        class="bg-primary text-white mx-2"
                        href="https://forms.gle/W5cWw5LCWzbmCXm69"
                        target="_blank"
                    >
                        Become a Member
                        <v-icon size="x-small" class="ml-2 align-self-center"> fa-solid fa-external-link </v-icon>
                    </v-btn>
                </v-row>
            </template> -->
        </page-header>

        <content-section bg-color="bg-transparent">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 class="text-h3 text-primary">About Us</h2>
                        <p class="text-h6 text-secondary-lighten-2 font-weight-regular mt-8">
                            The COMPAS Association is an independent public benefit organisation founded on the 1st of
                            March 2023 in Zurich, Switzerland, with the purpose to provide a complete, free, open
                            source, and cross-platform computational framework for interdisciplinary research and
                            collaboration in the Architecture, Engineering and Construction industry, managed by public
                            projects on compas.dev.
                        </p>
                        <h2 class="text-h3 text-primary mt-16">Our Mission</h2>
                        <ul class="text-h6 text-secondary-lighten-2 font-weight-regular my-8 pl-8">
                            <li>Maintain and further develop the core library of COMPAS.</li>
                            <li>Maintain and further develop the core extensions of COMPAS.</li>
                            <li>
                                Ensure the continued availability of the core library with a permissive open source
                                licence.
                            </li>
                            <li>
                                Maintain the technical infrastructure required for the development and deployment of
                                COMPAS.
                            </li>
                            <li>Provide support for development of 3rd party extensions.</li>
                            <li>Organise events and meetups for the academic community and professional practice.</li>
                            <li>
                                Promote the adoption of COMPAS in academia and professional practice through the
                                publication of educational materials, workshops and other outreach activities.
                            </li>
                        </ul>
                        <!-- <v-btn flat class="bg-primary text-white mx-2" href="#"> Read the Articles </v-btn> -->
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-blue-grey-lighten-5">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 class="text-h3 text-secondary-lighten-2 text-center">The Board</h2>
                    </v-col>
                </v-row>

                <v-row class="mt-16">
                    <v-col cols="12" md="8" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(item, index) in team" :key="index">
                                <v-card
                                    flat
                                    rounded="0"
                                    class="d-flex flex-column align-center bg-transparent mx-4 mb-8 no-hover"
                                    :href="item.link"
                                    target="_blank"
                                >
                                    <v-avatar size="240">
                                        <v-img :src="item.image" cover> </v-img>
                                    </v-avatar>
                                    <v-card-title class="font-weight-regular text-secondary">{{
                                        item.name
                                    }}</v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row class="mt-16 mb-8">
                    <v-col cols="12" md="8" class="text-center mx-auto">
                        <h2 class="text-h3 text-secondary-lighten-2">Founding Members</h2>
                        <p class="text-h6 text-secondary-lighten-2 font-weight-regular mt-8">
                            The following individuals and organizations listed are founding members and therefore have
                            been instrumental in establishing the COMPAS Association.
                        </p>
                    </v-col>
                </v-row>

                <v-row class="mb-16">
                    <v-col
                        cols="12"
                        md="4"
                        v-for="(group, i) in foundingMemberGroups"
                        :key="i"
                        class="my-0 py-0 d-flex flex-even"
                    >
                        <v-list dense :class="'my-0 flex-grow-1' + (smAndDown ? ' py-0' : '')">
                            <v-list-item v-for="(item, j) in group" :key="j">
                                <v-list-item-title class="text-h6 text-secondary-lighten-2 font-weight-regular">
                                    {{ item }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>

                <v-row class="mb-16">
                    <v-col cols="12" md="6" class="my-0 py-0 mx-auto">
                        <v-list dense :class="'my-0' + (smAndDown ? ' py-0' : '')">
                            <v-list-item v-for="(item, i) in foundingOrgs" :key="i">
                                <v-list-item-title class="text-h6 text-secondary-lighten-2 font-weight-regular">
                                    {{ item }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </template>
        </content-section>
    </v-container>
</template>

<style>
.v-card.no-hover:hover > .v-card__overlay {
    opacity: 0;
}
</style>

<script>
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";
import tom from "@/assets/team-tom.jpg";
import kathrin from "@/assets/team-kathrin.jpg";
import chen from "@/assets/team-chen.jpg";
import romana from "@/assets/team-romana.jpg";
import li from "@/assets/team-li.jpg";
import gonzalo from "@/assets/team-gonzalo.jpg";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    components: {
        PageHeader,
        ContentSection,
    },
    data: () => ({
        pageTitle: "The Association",
        pageSummary:
            "Ensuring a complete, free, open source, and cross-platform computational framework for interdisciplinary research and collaboration in AEC.",
        team: [
            {
                name: "Tom Van Mele",
                image: tom,
                link: "https://www.linkedin.com/in/tomvanmele/",
            },
            {
                name: "Kathrin Dörfler",
                image: kathrin,
                link: null,
            },
            {
                name: "Chen Kasirer",
                image: chen,
                link: null,
            },
            {
                name: "Romana Rust",
                image: romana,
                link: "https://www.linkedin.com/in/romana-rust-51600a98/?originalSubdomain=ch",
            },
            {
                name: "Li Chen",
                image: li,
                link: "https://www.linkedin.com/in/li-chen-48766a9a/",
            },
            {
                name: "Gonzalo Casas",
                image: gonzalo,
                link: "https://www.linkedin.com/in/gonzalocasas/",
            },
        ],
        foundingMembers: [
            "Van Mele, Tom",
            "Kasirer, Chen",
            "Casas, Gonzalo",
            "Lee, Juney",
            "Pastrana, Rafael",
            "Sounigo, Eliott",
            "Vestartas, Petras",
            "Xydis, Achilleas",
            "Leung, Pok Yin Victor",
            "Gramazio, Fabio",
            "Mitterberger, Daniela",
            "Johansson, Anton Tetov",
            "Rezaei Rad, Aryan",
            "Maia Avelino, Ricardo",
            "Pope, Randal",
            "Yang, wenqian",
            "Haldemann, Jonas",
            "Kladeftira, Marirena",
            "Bernhard, Mathias",
            "Silvennoinen, Heidi",
            "Fleischmann, Philippe",
            "Chadha, Kunaljit",
            "Domènech Rodríguez, Marta",
            "López López, David",
            "Helmreich, Matthias",
            "Ranaudo, Francesco",
            "Bruun, Edvard",
            "Rust, Romana",
            "Reisach, Dominik",
            "Kohler, Matthias",
            "Marji, Zaid",
            "Samec, Elizabeta",
            "Galanis, Lenna",
            "Nordenson, Guy",
            "Sabin, Jenny",
            "Low, Liam",
            "Zoppi, Zeno",
            "Fab Foundation Poland",
            "Cichocka, Judyta",
            "Blood, Adam",
            "Tsuruta, Ko",
            "Kodamadanchirayil Suresh, Sujal",
            "Yen, Chia Ching",
            "Pacher, Matteo",
            "Prinz, Christopher",
            "Mitropoulou, Ioanna",
            "Bucher, Martin Juan José",
            "Antequera, Angel",
            "Lo, Han",
            "Jiang, Leyuan",
            "Rout, Angela",
            "Feringa, Jelle",
            "Brenner, Matthias",
            "Paithankar, Kabir",
            "Dell'Endice, Alessandro",
            "Balinski, Grzegorz",
            "Goel, Abhimanyu",
            "Czerwinski, Tessina",
            "Brandão, Filipe",
            "Chen, Li",
            "Block, Philippe",
            "Raya",
            "Mattei, Gabriele",
            "Shinde, Abhishek",
            "Cabibihan, John",
            "El Nazer, Zahira",
            "Pavoncello, Etienne",
            "Amiri, Fatemeh",
            "Loveridge, Russell",
            "Zanon, Elena",
            "Svelte & Partners",
            "Lyrenmann, Michael",
            "Sharma, Varun",
            "Martins, Lucas",
            "Rietschel, Moritz",
            "Du, Chaoyu",
            "Wang, Ziqi",
            "Anouar, Adam",
            "MP, Thamil",
            "Ng, Ming Shan",
            "Wang, Zeming",
            "Bolboli, shiva",
            "Jain, Aditya",
            "Ackermann, Samuel",
            "Tsai, Ping-Hsun",
            "Lin, Yao",
            "Milano, Francesco",
            "Ercan Jenny, Selen",
            "Chen, Jeremy",
            "Tam, Kam Ming Mark",
            "Lavin, Alexander",
            "Chen, Qinglu",
            "Feihl, Nicolas",
            "Ascic, Ana",
            "Toumpektsi, Katerina",
            "Jipa, Andrei",
            "Calvo Barentin, Cristian",
            "Apolinarska, Aleksandra Anna",
        ],
        foundingOrgs: [
            "Block Research Group (ETH Zürich)",
            "Dept. of Architecture & Built environment, Lund University",
            "Design++, Center for Augmented Computational Design in Architecture, Engineering and Construction",
            "Institute of Technology in Architecture (ETH Zürich)",
            "Digital Building Technologies (ETH Zurich)",
            "Gramazio Kohler Research (ETH Zurich)",
            "Concrete Structures and Bridge Design",
        ],
    }),
    computed: {
        foundingMemberGroups() {
            const groupCount = 3;
            const groupSize = Math.ceil(this.foundingMembers.length / groupCount);
            const groups = [];

            for (let i = 0; i < this.foundingMembers.length; i += groupSize) {
                groups.push(this.foundingMembers.slice(i, i + groupSize));
            }

            return groups;
        },
    },
};
</script>
