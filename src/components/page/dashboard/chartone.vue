<template>
  <v-col
    cols="12"
    lg="4"
  >
    <base-material-chart-card
      :data="emailsSubscriptionChart.data"
      :options="emailsSubscriptionChart.options"
      :responsive-options="emailsSubscriptionChart.responsiveOptions"
      color="#E91E63"
      hover-reveal
      type="Bar"
    >
      <template v-slot:reveal-actions>
        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              v-bind="attrs"
              color="info"
              icon
              v-on="on"
            >
              <v-icon
                color="info"
              >
                mdi-refresh
              </v-icon>
            </v-btn>
          </template>

          <span>Refresh</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              v-bind="attrs"
              light
              icon
              v-on="on"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>

          <span>Change Date</span>
        </v-tooltip>
      </template>

      <h4 class="card-title font-weight-light mt-2 ml-2">
        Website Views
      </h4>

      <p class="d-inline-flex font-weight-light ml-2 mt-1">
        Last Campaign Performance
      </p>

      <template v-slot:actions>
        <v-icon
          class="mr-1"
          small
        >
          mdi-clock-outline
        </v-icon>
        <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
      </template>
    </base-material-chart-card>
  </v-col>
</template>

<script>
  export default {
    name: 'Chartone',
    data () {
      return {
        emailsSubscriptionChart: {
          data: {
            labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
      }
    }
  }
</script>

<style scoped>

</style>
