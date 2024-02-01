<template>
  <v-container fluid class="pa-0 ma-0">
    <page-header
      title="Make a Donation"
      summary="By making a donation you help us raise the financial resources needed to maintain the technical infrastructure of the COMPAS framework and to further develop its ecosystem of packages."
      bg-color="bg-primary"
      text-color="text-white"
      sub-text-color="text-primary-lighten-3"
    >
    </page-header>

    <content-section bg-color="bg-primary">
      <template v-slot:content>
        <v-row class="mb-16">
          <v-col cols="12" md="6" class="mx-auto">
            <v-card class="w-100 pa-8" flat>
              <v-row>
                <v-col class="d-flex flex-column justify-center">
                  <v-btn-toggle
                    v-model="donationFrequencyModel"
                    rounded="xl"
                    elevation="0"
                    class="w-100 bg-blue-grey-lighten-5 pa-1 my-4"
                  >
                    <v-btn
                      :class="'w-50 ' + (donationFrequencyModel == 0 ? 'bg-secondary' : 'bg-transparent')"
                      rounded="xl"
                      :ripple="false"
                    >
                      Monthly
                    </v-btn>
                    <v-btn
                      :class="'w-50 ' + (donationFrequencyModel == 1 ? 'bg-secondary' : 'bg-transparent')"
                      rounded="xl"
                      :ripple="false"
                    >
                      One-time
                    </v-btn>
                  </v-btn-toggle>
                  <v-window v-model="donationFrequencyModel">
                    <v-window-item>
                      <v-item-group
                        class="text-center my-4"
                        selected-class="bg-secondary"
                        v-model="donationMonthlyAmountModel"
                      >
                        <v-item
                          v-for="(item, i) in donationMonthly"
                          :key="i"
                          :value="i"
                          v-slot="{ isSelected, selectedClass, toggle }"
                        >
                          <v-btn
                            :variant="isSelected ? 'flat' : 'outlined'"
                            :class="['ma-2', selectedClass]"
                            rounded="lg"
                            min-width="100px"
                            :color="isSelected ? 'primary' : 'secondary-lighten-2'"
                            @click="donationMonthlyAmountToggle(toggle, i)"
                          >
                            &euro; {{ item.amount }}
                          </v-btn>
                        </v-item>
                      </v-item-group>
                      <v-item-group v-model="donationMonthlyAmountModel" class="my-4">
                        <v-item v-for="(item, i) in donationMonthly" v-slot="{ isSelected }" :key="i">
                          <div v-if="isSelected">
                            <p class="text-h6 text-secondary">Become a {{ item.member }} member.</p>
                            <!-- <p class="text-secondary">{{ item.rights }}</p> -->
                          </div>
                        </v-item>
                      </v-item-group>
                      <v-btn
                        flat
                        color="primary"
                        block
                        rounded="lg"
                        class="my-8"
                        :href="donationMonthly[donationMonthlyAmountModel].link"
                        target="_blank"
                      >
                        Donate
                      </v-btn>
                    </v-window-item>
                    <v-window-item>
                      <v-item-group
                        class="text-center my-4"
                        selected-class="bg-secondary"
                        v-model="donationOnceAmountModel"
                      >
                        <v-item
                          v-for="(item, i) in donationOnce"
                          :key="i"
                          :value="i"
                          v-slot="{ isSelected, selectedClass, toggle }"
                        >
                          <v-btn
                            :variant="isSelected ? 'flat' : 'outlined'"
                            :class="['ma-2', selectedClass]"
                            rounded="lg"
                            min-width="100px"
                            :color="isSelected ? 'primary' : 'secondary-lighten-2'"
                            @click="donationOnceAmountToggle(toggle, i)"
                          >
                            &euro; {{ item.amount }}
                          </v-btn>
                        </v-item>
                      </v-item-group>
                      <v-btn
                        flat
                        color="primary"
                        block
                        rounded="lg"
                        class="my-8"
                        :href="donationOnce[donationOnceAmountModel].link"
                        target="_blank"
                      >
                        Donate
                      </v-btn>
                    </v-window-item>
                  </v-window>
                </v-col>
              </v-row>
            </v-card>
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
    donationFrequencyModel: 0,
    donationMonthlyAmountModel: 2,
    donationOnceAmountModel: 0,
    dontationMonthlyParams: {
      frequency: "monthly",
      amount: null,
    },
    donationMonthly: [
      {
        amount: 5,
        member: "Bronze",
        rights: "Get a Bronze member bagde.",
        link: "https://buy.stripe.com/fZe5nccf1feg9kA28g",
      },
      {
        amount: 10,
        member: "Silver",
        rights: "Get a Silver member bagde.",
        link: "https://buy.stripe.com/7sIdTIen9feg9kA5kt",
      },
      {
        amount: 25,
        member: "Gold",
        rights: "Get your name on the website.",
        link: "https://buy.stripe.com/4gweXM5QDgikdAQ14e",
      },
      {
        amount: 50,
        member: "Platinum",
        rights: "Get your link on the website.",
        link: "https://buy.stripe.com/aEUg1Q6UH8PS2Wc5kv",
      },
      {
        amount: 100,
        member: "Diamond",
        rights: "Get your link on the website.",
        link: "https://buy.stripe.com/bIY8zo0wjd68eEUdR2",
      },
    ],
    donationOnce: [
      {
        amount: 25,
        link: "https://donate.stripe.com/cN23f4cf16HK1S8bIK",
      },
      {
        amount: 50,
        link: "https://donate.stripe.com/6oEg1Q1An3vy68oaEH",
      },
      {
        amount: 100,
        link: "https://donate.stripe.com/fZecPE5QD5DGdAQ5ko",
      },
      {
        amount: 250,
        link: "https://donate.stripe.com/28o5nc4Mzeac8gw8wB",
      },
      {
        amount: 500,
        link: "https://donate.stripe.com/7sIbLAen93vyfIY4gm",
      },
    ],
  }),
  methods: {
    donationMonthlyAmountToggle(toggle, i) {
      toggle();
      this.donationMonthlyAmountModel = i;
      this.dontationMonthlyParams.amount = this.donationMonthly[i].amount;
    },
    donationOnceAmountToggle(toggle, i) {
      toggle();
      this.donationOnceAmountModel = i;
    },
  },
};
</script>
