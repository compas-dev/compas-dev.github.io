import compas from "@/assets/compas_icon_white.png";
import compas_blue from "@/assets/compas_logo_blue.png";
import compas_default from "@/assets/compas_default.png";
import compas_default_white from "@/assets/compas_white.png";
import ethz from "@/assets/ethz.png";
import brg from "@/assets/brg.png";
import ita from "@/assets/ita.png";
import darch from "@/assets/darch.png";

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
            {
                name: "Department of Architecture",
                link: "https://arch.ethz.ch",
                logo: darch,
            },
            {
                name: "Institute of Technology in Architecture",
                link: "https://ita.ethz.ch",
                logo: ita,
            },
            {
                name: "NCCR dfab",
                link: "https://www.dfab.ch/",
                logo: brg,
            },
            {
                name: "Block Research Group",
                link: "https://block.arch.ethz.ch/",
                logo: darch,
            },
            {
                name: "Gramazio Kohler Research",
                link: "https://gramaziokohler.arch.ethz.ch/",
                logo: ita,
            },
            {
                name: "Digital Building Technologies",
                link: "https://dbt.arch.ethz.ch/",
                logo: ethz,
            },
            {
                name: "ETH Zurich",
                link: "https://www.ethz.ch/en.html",
                logo: ethz,
            },
            {
                name: "Department of Architecture",
                link: "https://arch.ethz.ch",
                logo: darch,
            },
            {
                name: "Institute of Technology in Architecture",
                link: "https://ita.ethz.ch",
                logo: ita,
            },
            {
                name: "NCCR dfab",
                link: "https://www.dfab.ch/",
                logo: brg,
            },
            {
                name: "Block Research Group",
                link: "https://block.arch.ethz.ch/",
                logo: darch,
            },
            {
                name: "Gramazio Kohler Research",
                link: "https://gramaziokohler.arch.ethz.ch/",
                logo: ita,
            },
            {
                name: "Digital Building Technologies",
                link: "https://dbt.arch.ethz.ch/",
                logo: ethz,
            },
        ],
        navigation: [
            {
                link: "/gettingstarted",
                title: "Getting Started",
                items: [],
            },
            {
                link: "/documentation",
                title: "Documentation",
                items: [
                    {
                        link: "/documentation/packages",
                        title: "Packages",
                        items: [],
                    },
                    {
                        link: "/documentation/workflows",
                        title: "Workflows",
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
    },
    mutations: {},
    actions: {},
    getters: {},
});

export default store;
