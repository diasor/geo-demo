<template>
	<section>
		<v-tabs class="d-flex justify-start flex-wrap" v-model="tab" >
			<v-tab>About the Application</v-tab>
			<v-tab>About the Author</v-tab>
		</v-tabs>

		<v-tabs-items v-model="tab">
			<v-tab-item>
				<about-application />
			</v-tab-item>
			<v-tab-item>
				<about-author />
			</v-tab-item>
		</v-tabs-items>
	</section>
</template>

<script>
import AboutApplication from "@/components/About/AboutApplication.vue"
import AboutAuthor from "@/components/About/AboutAuthor.vue"

export default {
	name: "About",
	
	components: {
		AboutApplication,
		AboutAuthor
	},
	
	data: () => ({
		tab: null
	})
}
</script>