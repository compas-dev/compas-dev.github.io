import compas from "@/assets/compas_icon_white.png";
import compas_blue from "@/assets/compas_logo_blue.png";
import compas_default from "@/assets/compas_default.png";
import compas_default_white from "@/assets/compas_white.png";
import ethz from "@/assets/ETH_logo_white.png";
import brg from "@/assets/BRG_logo_white.png";
import gkr from "@/assets/GKR_logo_white.png";
import dfab from "@/assets/NCCR_DFAB_logo_white.png";
import cme from "@/assets/CivMinEng_logo_white.png";
import dbt from "@/assets/DBT_logo_white.png";
import crcl from "@/assets/CRCL_logo_white.png";
import adr from "@/assets/ADR_logo_white.png";
import aelab from "@/assets/VUB-AELAB_logo_white.png";
import lund from "@/assets/Lund_logo_white.png";
import designplusplus from "@/assets/design++_logo_white.png";

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
        name: "Gramazio Kohler Research, ETH Zurich",
        link: "https://gramaziokohler.arch.ethz.ch/",
        logo: gkr,
      },
      {
        name: "Block Research Group, ETH Zurich",
        link: "https://block.arch.ethz.ch/",
        logo: brg,
      },
      {
        name: "NCCR dfab",
        link: "https://www.dfab.ch/",
        logo: dfab,
      },
      {
        name: "Design++",
        link: "https://designplusplus.ethz.ch/",
        logo: designplusplus,
      },
      {
        name: "Civil and Mineral Engineering, Univerity of Toronto",
        link: "https://civmin.utoronto.ca/",
        logo: cme,
      },
      {
        name: "Digital Building Technologies, ETH Zurich",
        link: "https://dbt.arch.ethz.ch/",
        logo: dbt,
      },
      {
        name: "Department of Architectural Engineering, Vrije Universiteit Brussel",
        link: "https://www.vub.be/arch/",
        logo: aelab,
      },
      {
        name: "Creative Computation Lab, EPFL",
        link: "http://crclcrclcrcl.org/",
        logo: crcl,
      },
      {
        name: "Department of Architecture & Built Environment, Lund University",
        link: "https://www.abm.lth.se/",
        logo: lund,
      },
      {
        name: "ADR Laboratory, Princeton University",
        link: "https://adeldesignresearch.org/",
        logo: adr,
      },
      {
        name: "Tailored Materiality Research, Delft University of Technology",
        link: "https://tailoredmateriality.com/",
        logo: null,
      },
      {
        name: "School of Architecture, Carnegie Mellon University",
        link: null,
        logo: null,
      },
      {
        name: "Technik & Architekur, Hochschule Luzern",
        link: null,
        logo: null,
      },
      {
        name: "Professorship of Digital Fabrication, TUM School of Engineering and Design",
        link: "https://www.arc.ed.tum.de/df/",
        logo: null,
      },
      {
        name: "Architectural Structure, University of Hong Kong",
        link: null,
        logo: null,
      },
      {
        name: "Fabrication- and Material-Aware Architecture, USI, Mendrisio",
        link: "https://usi.to/bcpf",
        logo: null,
      },
    ],
    navigation: [
      {
        link: "/gettingstarted",
        title: "Get Started",
        items: [],
      },
      {
        link: "/learn",
        title: "Learn",
        items: [
          {
            link: "/learn/documentation",
            title: "Documentation",
            items: [],
          },
          {
            link: "/learn/tutorials",
            title: "Tutorials",
            items: [],
          },
          {
            link: "https://compas.dev/compas-jupyterlite",
            title: "Try COMPAS",
            items: [],
          },
          {
            link: "https://compas.dev/compas",
            title: "COMPAS Core Library",
            items: [],
          },
        ],
      },
      {
        link: "/discuss",
        title: "Discuss",
        items: [
          {
            link: "https://forum.compas-framework.org",
            title: "COMPAS Forum",
            items: [],
          },
          {
            link: "https://join.slack.com/t/compas-framework/shared_invite/zt-2rsil7auc-IeQWb0aTXZrtSlEnGg1R5Q",
            title: "COMPAS Slack",
            items: [],
          },
        ],
      },
      {
        link: "/contribute",
        title: "Contribute",
        items: [],
      },
      {
        link: "/association",
        title: "Association",
        items: [],
      },
      {
        link: "/donate",
        title: "Donate",
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
