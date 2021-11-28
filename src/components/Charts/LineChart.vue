<script>
import VueChartJs from 'vue-chartjs'

export default {
    extends: VueChartJs.Line,

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
		},
		
		dataSetLabel: {
			type: String,
			default: ""
		}
    },

    mounted () {
        this.renderChart({
			labels: this.labels,
			datasets: [
				{
					label: this.dataSetLabel,
					borderColor: "#473879",
					fill: false,
					data: this.data,
					borderRadius: 20, 
				}
			]
        }, { responsive: true, maintainAspectRatio: false })
    }
}
</script>
