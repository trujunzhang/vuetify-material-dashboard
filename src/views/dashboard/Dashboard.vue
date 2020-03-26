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
import ChartOne from '@/components/page/dashboard/chartone'
import ChartTwo from '@/components/page/dashboard/charttwo'
import ChartThree from '@/components/page/dashboard/chartthree'
import StatsCardOne from '@/components/page/dashboard/statscardone.vue'
import StatsCardTwo from '@/components/page/dashboard/statscardtwo.vue'
import StatsCardThree from '@/components/page/dashboard/statscardthree.vue'
import StatsCardFour from '@/components/page/dashboard/statscardfour.vue'
import TableOne from '@/components/page/dashboard/tableone.vue'
import TableTwo from '@/components/page/dashboard/tabletwo.vue'

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
