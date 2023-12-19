<template>
  <v-card class="rounded-lg" color="#0F0A1E">
    <v-toolbar color="rgba(0,0,0,0)" flat dark class="py-4">
      <v-toolbar-title class="mt-n10">
        <span class="caption">test sale</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <div>
        <Bar
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData"
        />     
    </div>
  </v-card>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
};
</script>
