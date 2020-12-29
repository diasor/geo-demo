<script>
import VueChartJs from 'vue-chartjs'

export default {
    extends: VueChartJs.Bar,

    props: {
        labels: {
            type: Array,
            required: true,
        },

        data: {
            type: Array,
            required: true,
        },

        titleDate: {
            type: String,
            required: true
        }
    },

    mounted () {
        this.renderChart({
        labels: this.labels,
        datasets: [
            {
            label: `COVID19 Overview: Total confirmed cases upto ${this.titleDate}`,
            backgroundColor: "#473879",
            data: this.data,
            borderRadius: 20, 
            }
        ]
        }, {responsive: true, maintainAspectRatio: false})
    }
}
</script>
