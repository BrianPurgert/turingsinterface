<template >
	  <UContainer class = "mt-4" >
			<UCard >
				  <template #header />

				  <UInput
						v-model = "df_url"
						name = "df_url"
						type = "url"
						placeholder = "https://..."
						icon = "i-heroicons-globe-alt"
						:ui = "{ icon: { trailing: { pointer: '' } } }"
				  >
						<template #trailing >
							  <UButton
									variant = "ghost"
									@click = "execute"
									icon = "i-heroicons-bars-arrow-down"
							  >
							  </UButton >

							  <UButton
									v-show = "df_url !== ''"
									color = "gray"
									variant = "link"
									icon = "i-heroicons-x-mark-20-solid"
									:padded = "false"
									@click = "df_url = ''"
							  />
						</template >
				  </UInput >

				  <template #footer />
			</UCard >
			<UCard >
				  <UAccordion :items = "items" >
						<template #item = "{ item }" >
							  <p class = "italic text-gray-900 dark:text-white text-center" >
									{{ item.description }} </p >
						</template >
						<template #getting-started >

						</template >
						<template #installation = "{ description }" >

						</template >
				  </UAccordion >

				  <span >URL: {{ df_url }} </span >


				  <UCard v-for = "(value, key) in datafile" :key = "key" >
						<h2 >{{ key }}</h2 > <!-- Display the Query Key -->

						<div v-for = "(subValue, subKey) in value" :key = "subKey" >
							  <h3 >{{ subKey }}</h3 > <!-- Display the Identifier -->

							  <p >Url: {{ subValue.url }}</p > <!-- Display the URL -->

							  <h4 >Content</h4 >
							  <ul >
									<li v-for = "(content, index) in subValue.content" :key = "index" >
										  {{ content }} <!-- Display each item of content -->
									</li >
							  </ul >
						</div >
				  </UCard >


				  <!--
				  API response schema make it pretty to display with v-for:
				  {
										"url": "string",
										"page": "string",
										"<Query_Key_1>": {
											"<Identifier_1>": {
												"url": "string",
												"content": ["string", "string", ...]
											},
											...
										},
										"<Query_Key_2>": {
											"<Identifier_2>": {
												"url": "string",
												"content": ["string", "string", ...]
											},
											...
										},
										...
									}

									-->

				  <span >pending: {{ pending }} </span >
				  <span >error:{{ error }} </span >
			</UCard >

	  </UContainer >

</template >

<script setup lang = "ts" >
const items = [{
		label: 'Getting Started', icon: 'i-heroicons-information-circle', defaultOpen: true, slot: 'getting-started'
}, {
		label: 'Installation', icon: 'i-heroicons-arrow-down-tray', defaultOpen: true, slot: 'installation'
}, {
		label: 'Theming', icon: 'i-heroicons-eye-dropper', defaultOpen: true, description: ''
}]
const df_url = ref('')


const {data: datafile, pending, error, execute} = await useFetch('https://getthis.page/api', {
		query: {url: df_url}, immediate: false, watch: false
})


</script >
