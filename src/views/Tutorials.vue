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
        image: "https://raw.githubusercontent.com/compas-dev/tutorials/main/brep-booleans-vscode/notebook-viewer.png",
        link: "https://www.github.com/compas-dev/tutorials/tree/main/brep-booleans-vscode/README.md",
      },
      {
        title: "Storing and Moving Data",
        text: "In addition to geometric and tolpological information, the data structures in COMPAS can store arbitrary data on their components. In this tutorial, we add random geometry objects to the nodes of a graph and move a visualisation scene containing the graph from one environment to another.",
        image: null,
        link: "https://www.github.com/compas-dev/tutorials/tree/main/storing-and-moving-data/README.md",
      },
      // {
      //   title: "The Basics of Constrained Form Finding",
      //   text: "This tutorial shows how to create a simple form finding model, how to add constraints to the model, and how to solve the model to find an equilibrium form that satisfies the constraints.",
      //   image: null,
      //   link: "https://www.github.com/compas-dev/tutorials/tree/main/form-finding/README.md",
      // },
      {
        title: "Working with IFC files",
        text: "This tutorial is an example of using COMPAS to process IFC files into data trees that can be used to visualize and intuitively manipulate BIM models.",
        image: "https://raw.githubusercontent.com/compas-dev/tutorials/main/IFC/attribute_tree.png",
        link: "https://www.github.com/compas-dev/tutorials/tree/main/IFC/README.md",
      },
      {
        title: "Using COMPAS with FastAPI",
        text: "In this tutorial we show how to create a simple client/server application with FastAPI and COMPAS.",
        image: fastapi,
        link: "https://www.github.com/compas-dev/tutorials/tree/main/fastapi/README.md",
      },
      {
        title: "The Blender Monkey",
        text: "Many geometry processing libraries and CAD software have recognizable sample data. For example, the computer graphics community has the Stanford Bunny, Rhino has the Rhinoceros head, and Blender has the Suzanne monkey. This tutorial shows how to load the Blender monkey into COMPAS data and move it to Rhino.",
        image: "https://raw.githubusercontent.com/compas-dev/tutorials/main/the-blender-monkey/monkey.png",
        link: "https://www.github.com/compas-dev/tutorials/tree/main/the-blender-monkey/README.md",
      },
      {
        title: "Making a Browser App",
        text: "This repo contains a basic browser app made with Vue and ThreeJS, and with COMPAS running on a local server using FastAPI.",
        image: "https://raw.githubusercontent.com/compas-dev/compas-webviewer/main/compas-webviewer.png",
        link: "https://www.github.com/compas-dev/compas-webviewer/README.md",
      },
      // {
      //   title: "Parametric Building Information Modelling",
      //   text: "Creating custom computational workflows for BIM can be challenging, because most commercial BIM applications are close-sourced and not designed to be extended. This tutorial gives an example of using COMPAS to load a BIM model of a simple house, replace its wall with a parametric one generated with Rhino Grasshopper and then export again as a valid IFC file.",
      //   image: "https://raw.githubusercontent.com/compas-dev/tutorials/main/building-information-modelling/intro.png",
      //   link: "https://www.github.com/compas-dev/tutorials/tree/main/building-information-modelling/README.md",
      // },
      {
        title: "Grasshopper Python components",
        text: "Creating custom grasshopper python components can be almost as simple as dropping some code in a python file! This tutorial shows how to create components in Python using COMPAS tools.",
        image: "https://raw.githubusercontent.com/compas-dev/tutorials/main/ghpython-components/components.png",
        link: "https://github.com/compas-dev/tutorials/blob/main/ghpython-components/README.md",
      },
      {
        title: "Transfer data across tools",
        text: "Sending and receiving data between different tools can be challenging. And sending data between different tools that are not even in the same computer even more! This tutorial show how easy it is using `compas_eve`.",
        image: "https://raw.githubusercontent.com/compas-dev/tutorials/main/data-across-tools/pubsub.png",
        link: "https://github.com/compas-dev/tutorials/blob/main/data-across-tools/README.md",
      },
    ],
  }),
};
</script>
