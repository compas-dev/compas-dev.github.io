<template>
  <v-container fluid class="pa-0 ma-0">
    <page-header
      title="Tutorials"
      summary="Short tutorials for typical AEC problems and tasks."
      bg-color="bg-primary"
      text-color="text-white"
      sub-text-color="text-primary-lighten-3"
    ></page-header>

    <content-section bg-color="bg-transparent">
      <template v-slot:content>
        <v-row class="mb-16" v-for="(item, i) in tutorials" :key="i">
          <v-col cols="12" md="10" class="mx-auto">
            <v-row>
              <v-col cols="12" md="6" class="pr-12">
                <v-responsive v-if="item.image" max-width="1600px" max-height="900px">
                  <v-img :src="item.image" :alt="item.title" class="w-100 h-100"></v-img>
                </v-responsive>
                <v-responsive v-else max-width="1600px" max-height="900px" :aspect-ratio="16 / 9">
                  <div class="bg-blue-grey-lighten-5 w-100 h-100"></div>
                </v-responsive>
              </v-col>
              <v-col cols="12" md="6">
                <h2 class="text-h4 mb-4 text-primary">{{ item.title }}</h2>
                <p class="text-h6 font-weight-regular text-secondary-lighten-2 mb-8">{{ item.text }}</p>
                <v-btn flat class="bg-primary" :href="item.link" target="_blank">
                  Visit repo
                  <font-awesome-icon
                    :icon="['far', 'arrow-up-right-from-square']"
                    class="ml-2 align-self-center"
                    size="xs"
                /></v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
    </content-section>
  </v-container>
</template>

<script>
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";
import fastapi from "@/assets/compas-tutorial-fastapi.png";

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
    tutorials: [
      {
        title: "Brep booleans in VS Code",
        text: "COMPAS has a geometry processing library that can be used independent of CAD software. In this tutorial we apply boolean operations to a Brep, direclty in VS Code, and visualise the result using a Jupyter notebook viewer.",
        image: null,
        link: "https://www.github.com/compas-dev/tutorials/tree/master/brep-booleans-vscode",
      },
      {
        title: "The Basics of Constrained Form Finding",
        text: "This tutorial shows how to create a simple form finding model, how to add constraints to the model, and how to solve the model to find an equilibrium form that satisfies the constraints.",
        image: null,
        link: "https://www.github.com/compas-dev/tutorials/tree/master/form-finding/README.md",
      },
      {
        title: "Working with IFC files",
        text: "This tutorial is an example of using COMPAS to process IFC files into data trees that can be used to visualize and intuitively manipulate BIM models.",
        image: "https://raw.githubusercontent.com/compas-dev/tutorials/main/IFC/attribute_tree.png",
        link: "https://www.github.com/compas-dev/tutorials/tree/master/IFC/README.md",
      },
      {
        title: "Using COMPAS with FastAPI",
        text: "In this tutorial we show how to create a simple client/server application with FastAPI and COMPAS.",
        image: fastapi,
        link: "https://www.github.com/compas-dev/tutorials/tree/master/fastapi/README.md",
      },
      // {
      //   title: "COMPAS for Robotic Fabrication",
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
      //   image: null,
      //   link: "https://www.github.com/compas-dev/tutorials/tree/master/robotic-fabrication",
      // },
      // {
      //     title: "COMPAS for 3D Printing",
      //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
      //     image: null,
      //     link: "https://www.github.com/compas-dev/tutorials/tree/master/3d-printing",
      // },
      {
        title: "COMPAS for Building Information Modelling",
        text: "Creating custom computational workflows for BIM can be challenging, because most commercial BIM applications are close-sourced and not designed to be extended. This tutorial gives an example of using COMPAS to load a BIM model of a simple house, replace its wall with a parametric one generated with Rhino Grasshopper and then export again as a valid IFC file.",
        image: "https://raw.githubusercontent.com/compas-dev/tutorials/main/building-information-modelling/intro.png",
        link: "https://www.github.com/compas-dev/tutorials/tree/master/building-information-modelling/README.md",
      },
      // {
      //     title: "COMPAS for Finite Element Analysis",
      //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
      //     image: null,
      //     link: "https://www.github.com/compas-dev/tutorials/tree/master/finite-element-analysis",
      // },
    ],
  }),
};
</script>
