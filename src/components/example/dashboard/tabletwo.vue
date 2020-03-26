<template>
  <v-col
    cols="12"
    md="6"
  >
    <base-material-card class="px-5 py-3">
      <template v-slot:heading>
        <v-tabs
          v-model="tabs"
          background-color="transparent"
          slider-color="white"
        >
          <span
            class="subheading font-weight-light mx-3"
            style="align-self: center"
          >Tasks:</span>
          <v-tab class="mr-3">
            <v-icon class="mr-2">
              mdi-bug
            </v-icon>
            Bugs
          </v-tab>
          <v-tab class="mr-3">
            <v-icon class="mr-2">
              mdi-code-tags
            </v-icon>
            Website
          </v-tab>
          <v-tab>
            <v-icon class="mr-2">
              mdi-cloud
            </v-icon>
            Server
          </v-tab>
        </v-tabs>
      </template>

      <v-tabs-items
        v-model="tabs"
        class="transparent"
      >
        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <v-card-text>
            <template v-for="(task, i) in tasks[tabs]">
              <v-row
                :key="i"
                align="center"
              >
                <v-col cols="1">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="task.value"
                      color="secondary"
                    />
                  </v-list-item-action>
                </v-col>

                <v-col cols="9">
                  <div
                    class="font-weight-light"
                    v-text="task.text"
                  />
                </v-col>

                <v-col
                  cols="2"
                  class="text-right"
                >
                  <v-icon class="mx-1">
                    mdi-pencil
                  </v-icon>
                  <v-icon
                    color="error"
                    class="mx-1"
                  >
                    mdi-close
                  </v-icon>
                </v-col>
              </v-row>
            </template>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </base-material-card>
  </v-col>
</template>

<script src="./tabletwo.js"/>
