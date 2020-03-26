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

<script>
  export default {
    name: 'Tableone',
    data () {
      return {
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id',
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Salary',
            value: 'salary',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Country',
            value: 'country',
            align: 'right',
          },
          {
            sortable: false,
            text: 'City',
            value: 'city',
            align: 'right',
          },
        ],
        items: [
          {
            id: 1,
            name: 'Dakota Rice',
            country: 'Niger',
            city: 'Oud-Tunrhout',
            salary: '$35,738',
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            country: 'Curaçao',
            city: 'Sinaai-Waas',
            salary: '$23,738',
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            country: 'Netherlands',
            city: 'Overland Park',
            salary: '$56,142',
          },
          {
            id: 4,
            name: 'Philip Chanley',
            country: 'Korea, South',
            city: 'Gloucester',
            salary: '$38,735',
          },
          {
            id: 5,
            name: 'Doris Greene',
            country: 'Malawi',
            city: 'Feldkirchen in Kārnten',
            salary: '$63,542',
          },
        ],
      }
    }
  }
</script>

<style scoped>

</style>
