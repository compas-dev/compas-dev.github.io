import compas from "@/assets/compas_icon_white.png";
import compas_blue from "@/assets/compas_logo_blue.png";
import compas_default from "@/assets/compas_default.png";
import compas_default_white from "@/assets/compas_white.png";
import ethz from "@/assets/ETH_logo_white.png";
import brg from "@/assets/BRG_logo_white.png";
import gkr from "@/assets/GKR_logo_white.png";
import ita from "@/assets/ITA_logo_white.png";
import darch from "@/assets/DARCH_logo_white.png";
import dfab from "@/assets/NCCR_DFAB_logo_white.png";
import cme from "@/assets/CivMinEng_logo_white.png";

import { createStore } from "vuex";

const store = createStore({
    state: {
        logos: {
            compas: {
                src: compas,
                alt: "COMPAS",
            },
            compasBlue: {
                src: compas_blue,
                alt: "COMPAS",
            },
            compasDefault: {
                src: compas_default,
                alt: "COMPAS",
            },
            compasDefaultWhite: {
                src: compas_default_white,
                alt: "COMPAS",
            },
        },
        social: [
            {
                name: "github",
                link: "https://github.com/compas-dev",
                icon: "fa-brands fa-github",
            },
            {
                name: "pypi",
                link: "https://pypi.org/project/COMPAS/",
                icon: "fa-brands fa-python",
            },
            {
                name: "forum",
                link: "https://forum.compas-framework.org",
                icon: "fa-brands fa-discourse",
            },
        ],
        sponsors: [
            {
                name: "ETH Zurich",
                link: "https://www.ethz.ch/en.html",
                logo: ethz,
            },
            // {
            //     name: "Department of Architecture",
            //     link: "https://arch.ethz.ch",
            //     logo: darch,
            // },
            // {
            //     name: "Institute of Technology in Architecture",
            //     link: "https://ita.ethz.ch",
            //     logo: ita,
            // },
            {
                name: "Gramazio Kohler Research",
                link: "https://gramaziokohler.arch.ethz.ch/",
                logo: gkr,
            },
            {
                name: "Block Research Group",
                link: "https://block.arch.ethz.ch/",
                logo: brg,
            },
            {
                name: "NCCR dfab",
                link: "https://www.dfab.ch/",
                logo: dfab,
            },
            {
                name: "Civil and Mineral Engineering, Univerity of Toronto",
                link: "https://civmin.utoronto.ca/",
                logo: cme,
            },
            // {
            //     name: "Digital Building Technologies",
            //     link: "https://dbt.arch.ethz.ch/",
            //     logo: dbt,
            // },
        ],
        navigation: [
            {
                link: "/gettingstarted",
                title: "Getting Started",
                items: [],
            },
            {
                link: "/resources",
                title: "Resources",
                items: [
                    {
                        link: "/resources/packages",
                        title: "Package docs",
                        items: [],
                    },
                    // {
                    //     link: "/resources/workflows",
                    //     title: "Workflows",
                    //     items: [],
                    // },
                    {
                        link: "/resources/tutorials",
                        title: "Tutorials",
                        items: [],
                    },
                    {
                        link: "/resources/roadmap",
                        title: "Roadmap",
                        items: [],
                    },
                    {
                        link: "https://forum.compas-framework.org",
                        title: "COMPAS Forum",
                        items: [],
                    },
                ],
            },
            {
                link: "/association",
                title: "Association",
                items: [],
            },
            {
                link: "/contribute",
                title: "Contribute",
                items: [],
            },
        ],
        loremipsum:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    mutations: {},
    actions: {},
    getters: {},
});

export default store;
