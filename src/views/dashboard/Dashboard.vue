<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <chart-one />
      <chart-two />
      <chart-three />
      <stats-card-one />
      <stats-card-two />
      <stats-card-three />
      <stats-card-four />
      <table-one />
      <table-two />
    </v-row>
  </v-container>
</template>

<script>
import ChartOne from '@/components/example/dashboard/chartone.vue'
import ChartTwo from '@/components/example/dashboard/charttwo.vue'
import ChartThree from '@/components/example/dashboard/chartthree.vue'
import StatsCardOne from '@/components/example/dashboard/statscardone.vue'
import StatsCardTwo from '@/components/example/dashboard/statscardtwo.vue'
import StatsCardThree from '@/components/example/dashboard/statscardthree.vue'
import StatsCardFour from '@/components/example/dashboard/statscardfour.vue'
import TableOne from '@/components/example/dashboard/tableone.vue'
import TableTwo from '@/components/example/dashboard/tabletwo.vue'

  export default {
    name: 'DashboardDashboard',
    components: {
      ChartOne,
      ChartTwo,
      ChartThree,
      StatsCardOne,
      StatsCardTwo,
      StatsCardThree,
      StatsCardFour,
      TableOne,
      TableTwo
    },
    data () {
      return {
        list: {
          0: false,
          1: false,
          2: false,
        },
      }
    },

    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
