<template>
  <v-col
    cols="12"
    md="6"
  >
    <base-material-card
      color="warning"
      class="px-5 py-3"
    >
      <template v-slot:heading>
        <div class="display-2 font-weight-light">
          Employees Stats
        </div>

        <div class="subtitle-1 font-weight-light">
          New employees on 15th September, 2016
        </div>
      </template>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="items"
        />
      </v-card-text>
    </base-material-card>
  </v-col>
</template>

<script src="./tableone.js"/>
