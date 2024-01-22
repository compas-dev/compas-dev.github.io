<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Getting Started"
            summary="Quickly get started with these step-by-step instructions."
            bg-color="bg-primary"
            text-color="text-white"
            sub-text-color="text-primary-lighten-3"
        ></page-header>

        <content-section class="pb-16">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Introduction</h2>
                        <p :class="pClass">
                            On this page are a few basic instructions to get you started with COMPAS on your system.
                            Since we recommend using COMPAS in combination with the
                            <a href="https://www.anaconda.com/download"> free Python distribution Anaconda </a>, the
                            installation instructions are written for <span v-html="conda"></span>, the package and
                            environment manager of Anaconda. If you need help getting started with
                            <span v-html="conda"></span>, there are many good tutorials available online; for example
                            here:
                            <a href="https://docs.conda.io/projects/conda">https://docs.conda.io/projects/conda</a>
                        </p>
                    </v-col>
                </v-row>

                <v-row class="mt-16">
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Installation</h2>
                        <p :class="pClass">
                            To install COMPAS with <span v-html="conda"></span> in an environment named "compas-dev",
                            use the following command.
                        </p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-bash"
>conda create -n compas-dev -c conda-forge compas
</code></pre>
                        </v-sheet>
                        <p :class="pClass">Activate the environment.</p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-bash"
>conda activate compas-dev
</code></pre>
                        </v-sheet>
                        <p :class="pClass">Start the Python interpreter.</p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-bash"
>python
</code></pre>
                        </v-sheet>
                        <p :class="pClass">Import the core compas package and print the installed version.</p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-bash"
>>>> import compas
>>> compas.__version__
'2.0.0'
</code></pre>
                        </v-sheet>
                    </v-col>
                </v-row>

                <v-row class="mt-16">
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Basic Example</h2>
                        <p :class="pClass">
                            As a basic example, we create a mesh from a unit-sized box geometry, apply catmull-clark
                            subdivision, and export the mesh to an OBJ file.
                        </p>
                        <p :class="pClass">First import a box from the geometry package.</p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-python"
>>>> from compas.geometry import Box
</code></pre>
                        </v-sheet>
                        <p :class="pClass">Then create and convert the box in a few simple steps.</p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-python"
>>>> box = Box(xsize=1, ysize=1, zsize=1)
>>> mesh = box.to_mesh()
>>> ball = mesh.subdivided(steps=3)
>>> ball.to_obj('ball.obj')
</code></pre>
                        </v-sheet>
                        <p :class="pClass">Or, as a one-liner...</p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-python"
>>>> Box(1).to_mesh().subdivided(steps=3).to_obj('ball.obj')
</code></pre>
                        </v-sheet>
                        <p :class="pClass">To see the result, import the OBJ file into your favourite CAD software.</p>
                        <v-img :src="compasGettingStarted" class="my-8"></v-img>
                        <p :class="pClass">
                            To exit the interpreter, don't forget to run the <code>exit</code> command.
                        </p>
                        <v-sheet border class="mt-8">
                            <pre :class="preClass"><code class="language-python"
>>>> exit()
</code></pre>
                        </v-sheet>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-blue-grey-lighten-5">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12">
                        <h1 class="text-h3 text-center text-secondary-lighten-2">Next Steps</h1>
                    </v-col>
                </v-row>

                <v-row class="my-16 justify-center">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="4" class="d-flex flex-even">
                                <v-card flat rounded="0" class="pa-4 bg-white d-flex flex-grow-1 flex-column">
                                    <v-card-title class="text-secondary">COMPAS User Guide</v-card-title>
                                    <v-card-text class="text-secondary">
                                        Installation instructions, simple examples, basic tutorials about geometry and
                                        data structures, instructions for working in CAD environments, ...
                                    </v-card-text>
                                    <v-card-actions class="align-self-end w-100">
                                        <v-btn href="https://compas.dev/compas/latest/userguide" target="_blank">
                                            Read more
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4" class="d-flex flex-even">
                                <v-card flat rounded="0" class="pa-4 bg-white d-flex flex-grow-1 flex-column">
                                    <v-card-title class="text-secondary">Tutorials</v-card-title>
                                    <v-card-text class="text-secondary">
                                        Examples of how to use COMPAS in combination with other tools and libraries for
                                        different AEC applications.
                                    </v-card-text>
                                    <v-card-actions class="align-self-end w-100">
                                        <v-btn :to="{ name: 'Tutorials' }"> Read more </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4" class="d-flex flex-even">
                                <v-card flat rounded="0" class="pa-4 bg-white d-flex flex-grow-1 flex-column">
                                    <v-card-title class="text-secondary">Package Overview</v-card-title>
                                    <v-card-text class="text-secondary">
                                        The COMPAS framework has a core library and many optional extension packages for
                                        specific AEC applications and workflows.
                                    </v-card-text>
                                    <v-card-actions class="align-self-end w-100">
                                        <v-btn :to="{ name: 'Packages' }"> Read more </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-primary">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12">
                        <h1 class="text-h3 text-center text-white">COMPAS in the Browser</h1>
                        <p class="text-h5 text-center text-primary-lighten-3 font-weight-light my-8">
                            Thanks to Pyodide and JupyterLite you can now try COMPAS directly in the browser...
                        </p>
                    </v-col>
                </v-row>

                <v-row class="my-8 justify-center">
                    <v-col cols="12" md="8" class="mx-auto">
                        <v-card
                            flat
                            rounded="0"
                            class="bg-transparent"
                            href="https://compas.dev/compas-jupyterlite/"
                            target="_blank"
                        >
                            <v-responsive
                                v-if="compasTryJupyterLite"
                                max-width="1600px"
                                max-height="900px"
                                :aspect-ratio="16 / 9"
                            >
                                <img
                                    :src="compasTryJupyterLite"
                                    alt="Try COMPAS in the browser with JupyterLite"
                                    class="w-100 h-100"
                                />
                            </v-responsive>
                            <v-responsive v-else max-width="1600px" max-height="900px" :aspect-ratio="16 / 9">
                                <div class="bg-white w-100 h-100"></div>
                            </v-responsive>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>
    </v-container>
</template>

<style></style>

<script>
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";
import compasGettingStarted from "@/assets/COMPAS_getting-started.png";
import compasTryJupyterLite from "@/assets/COMPAS_try-jupyterlite.png";

import Prism from "prismjs";
import "prismjs/themes/prism.css";

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
        h2Class: "text-h3 text-primary mb-8",
        pClass: "text-h6 text-secondary-lighten-2 font-weight-regular mt-4",
        ulClass: "text-h6 text-secondary-lighten-2 font-weight-regular mt-4 pl-8",
        preClass: "ma-0 bg-blue-grey-lighten-5",
        codeClass: "text-secondary bg-blue-grey-lighten-5 px-1",
        conda: "<code class='px-1 bg-blue-grey-lighten-5'>conda</code>",
    }),
    computed: {
        compasGettingStarted() {
            return compasGettingStarted;
        },
        compasTryJupyterLite() {
            return compasTryJupyterLite;
        },
    },
    mounted() {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        Prism.highlightAll(); // highlight your code on mount
    },
};
</script>
