<template>
  <v-container fluid class="pa-0 ma-0 pb-16">
    <page-header
      title="Core Library"
      summary="The COMPAS framework consists of a core library with all base functionality and a
            collection of extensions for specific tasks. If you're new to COMPAS, the core library
            is a good place to start."
    >
      <template v-slot:rows>
        <v-row :class="smAndDown ? 'my-4' : 'my-8'">
          <v-col cols="12" class="d-flex flex-row justify-center">
            <v-btn
              class="bg-primary text-white mx-2"
              href="https://compas.dev/compas/latest/userguide/"
              target="_blank"
            >
              User Guide
            </v-btn>
            <v-btn class="bg-primary text-white mx-2" href="https://compas.dev/compas/latest/devguide/" target="_blank">
              Dev Guide
            </v-btn>
            <v-btn class="bg-primary text-white mx-2" href="https://compas.dev/compas/latest/api/" target="_blank">
              API Reference
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-16">
          <v-col cols="12" md="3" class="d-flex flex-even" v-for="(item, i) in coreLibrary" :key="i">
            <v-card flat class="pa-4 pb-8" rounded="0">
              <v-card-title class="text-secondary">{{ item.name }}</v-card-title>
              <v-card-text class="text-secondary flex-grow-1">
                {{ item.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </page-header>

    <content-section bg-color="bg-white">
      <template v-slot:content>
        <v-row class="my-8">
          <v-col cols="12" class="text-center">
            <h1 class="text-h3 text-secondary-lighten-2">AEC Packages</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in aecPackages" :key="repo.name">
            <repo-card :repo="repo"></repo-card>
          </v-col>
        </v-row>
      </template>
    </content-section>

    <content-section bg-color="bg-white">
      <template v-slot:content>
        <v-row class="my-8">
          <v-col cols="12" class="text-center">
            <h1 class="text-h3 text-secondary-lighten-2">UI Packages</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in uiPackages" :key="repo.name">
            <repo-card :repo="repo"></repo-card>
          </v-col>
        </v-row>
      </template>
    </content-section>

    <content-section bg-color="bg-white">
      <template v-slot:content>
        <v-row class="my-8">
          <v-col cols="12" class="text-center">
            <h1 class="text-h3 text-secondary-lighten-2">Communication Packages</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in communicationPackages" :key="repo.name">
            <repo-card :repo="repo"></repo-card>
          </v-col>
        </v-row>
      </template>
    </content-section>

    <content-section bg-color="bg-white">
      <template v-slot:content>
        <v-row class="mb-8">
          <v-col cols="12" class="text-center">
            <h1 class="text-h3 text-secondary-lighten-2">Core Extensions</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in coreExtensions" :key="repo.name">
            <repo-card :repo="repo"></repo-card>
          </v-col>
        </v-row>
      </template>
    </content-section>

    <content-section bg-color="bg-white">
      <template v-slot:content>
        <v-row class="mb-8">
          <v-col cols="12" class="text-center">
            <h1 class="text-h3 text-secondary-lighten-2">Dev Tools</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in devPackages" :key="repo.name">
            <repo-card :repo="repo"></repo-card>
          </v-col>
        </v-row>
      </template>
    </content-section>
  </v-container>
</template>

<script>
import { Octokit } from "@octokit/rest";
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";
import RepoCard from "@/components/RepoCard.vue";
import blender from "@/assets/images/blender-icon.png";
import rhino from "@/assets/images/rhino-icon.png";
import grasshopper from "@/assets/images/grasshopper-icon.png";
import compas_cgal from "@/assets/images/compas_cgal.png";
import compas_libigl from "@/assets/images/compas_libigl.png";
import compas_occ from "@/assets/images/compas_occ.png";
import compas_gmsh from "@/assets/images/compas_gmsh.png";
import compas_fab from "@/assets/images/compas_fab.png";
import compas_slicer from "@/assets/images/compas_slicer.jpg";
import compas_cloud from "@/assets/images/compas_cloud.png";
import compas_rrc from "@/assets/images/compas_rrc.png";

export default {
  setup() {
    const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
    return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
  },
  components: {
    PageHeader,
    ContentSection,
    RepoCard,
  },
  methods: {
    // async getAllRepos() {
    //     const octokit = new Octokit({
    //         baseUrl: "https://api.github.com",
    //     });
    //     const response = await octokit.rest.repos.listForOrg({
    //         org: "compas-dev",
    //         type: "public",
    //         sort: "name",
    //         per_page: 100,
    //     });
    //     this.allRepos = response.data;
    // },
    async getRepoData(name, organization) {
      const octokit = new Octokit({
        baseUrl: "https://api.github.com",
      });
      const response = await octokit.rest.repos.get({
        owner: organization,
        repo: name,
      });
      return response.data;
    },
    async getRepoImage(name, organization) {
      const png = `https://raw.githubusercontent.com/${organization}/${name}/main/${name}.png`;
      const jpg = `https://raw.githubusercontent.com/${organization}/${name}/main/${name}.jpg`;

      const response = await fetch(png);
      if (response.ok) {
        return response.url;
      } else {
        const response = await fetch(jpg);
        if (response.ok) {
          return response.url;
        } else {
          return null;
        }
      }
    },
  },
  created() {
    this.coreExtensions.forEach((repo) => {
      if (repo.organization != null) {
        this.getRepoImage(repo.name, repo.organization).then((image) => {
          if (image != null) {
            repo.image = image;
          }
        });
        this.getRepoData(repo.name, repo.organization).then((data) => {
          repo.keywords = data.topics.filter((topic) => {
            if (topic == "compas") {
              return false;
            }
            return true;
          });
        });
      }
    });
    this.aecPackages.forEach((repo) => {
      if (repo.organization != null) {
        this.getRepoImage(repo.name, repo.organization).then((image) => {
          if (image != null) {
            repo.image = image;
          }
        });
        console.log(repo.image);
        this.getRepoData(repo.name, repo.organization).then((data) => {
          repo.keywords = data.topics.filter((topic) => {
            if (topic == "compas") {
              return false;
            }
            return true;
          });
        });
      }
    });
    this.uiPackages.forEach((repo) => {
      if (repo.organization != null) {
        this.getRepoImage(repo.name, repo.organization).then((image) => {
          if (image != null) {
            repo.image = image;
          }
        });
        console.log(repo.image);
        this.getRepoData(repo.name, repo.organization).then((data) => {
          repo.keywords = data.topics.filter((topic) => {
            if (topic == "compas") {
              return false;
            }
            return true;
          });
        });
      }
    });
    this.communicationPackages.forEach((repo) => {
      if (repo.organization != null) {
        this.getRepoImage(repo.name, repo.organization).then((image) => {
          if (image != null) {
            repo.image = image;
          }
        });
        console.log(repo.image);
        this.getRepoData(repo.name, repo.organization).then((data) => {
          repo.keywords = data.topics.filter((topic) => {
            if (topic == "compas") {
              return false;
            }
            return true;
          });
        });
      }
    });
    this.devPackages.forEach((repo) => {
      if (repo.organization != null) {
        this.getRepoImage(repo.name, repo.organization).then((image) => {
          if (image != null) {
            repo.image = image;
          }
        });
        this.getRepoData(repo.name, repo.organization).then((data) => {
          repo.keywords = data.topics.filter((topic) => {
            if (topic == "compas") {
              return false;
            }
            return true;
          });
        });
      }
    });
  },
  computed: {
    compasLogo() {
      return this.$store.state.logos.compasBlue;
    },
  },
  data: () => ({
    allRepos: [],
    coreLibrary: [
      {
        name: "compas",
        description:
          "Data classes, geometry kernel, data structures, visualisation interface, remote procedure calls, and more.",
        image: "https://via.placeholder.com/640x360",
        keywords: null,
      },
      {
        name: "compas_blender",
        description:
          "Conversions between COMPAS objects and native Blender types. Implementation of visualisation interface for Blender.",
        image: blender,
        keywords: null,
      },
      {
        name: "compas_ghpython",
        description:
          "Conversions between COMPAS objects and native Rhino types. Implementation of visualisation interface for Grasshopper.",
        image: grasshopper,
        keywords: null,
      },
      {
        name: "compas_rhino",
        description:
          "Conversions between COMPAS objects and native Rhino types. Implementation of visualisation interface for Rhino.",
        image: rhino,
        keywords: null,
      },
    ],
    coreExtensions: [
      {
        name: "compas_cgal",
        organization: "compas-dev",
        description: "COMPAS bindings for geometry algorithms of CGAL.",
        image: compas_cgal,
        keywords: null,
      },
      {
        name: "compas_libigl",
        organization: "compas-dev",
        description: "COMPAS bindings for geometry algorithms of Libigl.",
        image: compas_libigl,
        keywords: null,
      },
      {
        name: "compas_occ",
        organization: "compas-dev",
        description:
          "Wrapper for the geometry kernel of OCC, providing plugins for the COMPAS Nurbs and Brep pluggables.",
        image: compas_occ,
        keywords: null,
      },
      {
        name: "compas_gmsh",
        organization: "compas-dev",
        description: "High-quality FEA meshing for COMPAS based on Gmsh.",
        image: compas_gmsh,
        keywords: null,
      },
    ],
    communicationPackages: [
      {
        name: "compas_eve",
        organization: "compas-dev",
        description: "COMPAS Event Extensions: adds event-based communication infrastructure to the COMPAS framework.",
        image: null,
        keywords: null,
      },
      {
        name: "compas_cloud",
        organization: "compas-dev",
        description: "COMPAS Remote Procedure Calls using websockets.",
        image: compas_cloud,
        keywords: null,
      },
    ],
    uiPackages: [
      {
        name: "compas_viewer",
        organization: "compas-dev",
        description: "COMPAS viewer based on PySide6 and Qt.",
        image: null,
        keywords: null,
      },
      {
        name: "compas-webviewer",
        organization: "compas-dev",
        description: "COMPAS viewer for the browser built with Vue and ThreeJS.",
        image: null,
        keywords: null,
      },
      {
        name: "compas_notebook",
        organization: "compas-dev",
        description: "COMPAS viewer for Jupyter notebooks.",
        image: null,
        keywords: null,
      },
    ],
    aecPackages: [
      {
        name: "compas_fab",
        organization: "compas-dev",
        description: "Robotic fabrication package for the COMPAS Framework.",
        image: compas_fab,
        keywords: null,
      },
      {
        name: "compas_robots",
        organization: "compas-dev",
        description: "Robot fundamentals for the COMPAS Framework.",
        image: null,
        keywords: null,
      },
      {
        name: "compas_rrc",
        organization: "compas-rrc",
        description: "Remote control of ABB robots using the Robot Web Services (RWS).",
        image: compas_rrc,
        keywords: null,
      },
      {
        name: "compas_fea2",
        organization: "compas-dev",
        description: "Finite Element Analysis ...",
        image: null,
        keywords: null,
      },
      {
        name: "compas_slicer",
        organization: "compas-dev",
        description: "Slicing of 3D models for 3D printing.",
        image: compas_slicer,
        keywords: null,
      },
      {
        name: "compas_timber",
        organization: "gramaziokohler",
        description: "Timber design and fabrication for the COMPAS Framework.",
        image: null,
        keywords: null,
      },
      {
        name: "compas_fd",
        organization: "blockresearchgroup",
        description: "Constrained form finding using the force density method.",
        image: null,
        keywords: null,
      },
      {
        name: "compas_ifc",
        organization: "compas-dev",
        description: "Building information modelling for COMPAS.",
        image: null,
        keywords: null,
      },
    ],
    devPackages: [
      {
        name: "compas_invocations",
        organization: "compas-dev",
        description: "COMPAS develeopment tools as invokable actions.",
        image: null,
        keywords: null,
      },
      {
        name: "sphinx_compas2_theme",
        organization: "compas-dev",
        description: "Sphinx theme for COMPAS 2 based on sphinx-book-theme and pydata-sphinx-theme.",
        image: null,
        keywords: null,
      },
      {
        name: "compas_package_template",
        organization: "compas-dev",
        description: "Cookiecutter template for COMPAS packages.",
        image: null,
        keywords: null,
      },
    ],
  }),
};
</script>
