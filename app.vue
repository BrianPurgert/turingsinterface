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


				  <UTabs
						:items = "datafile"
						orientation = "vertical"
						:ui = "{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }"
				  />


				  <UCard
						v-for = "(value, key, index) in datafile"
						:key = "key"
						class = "w-full"
						:ui = "{
      					base: '',
      					ring: '',
      					divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      					header: { padding: 'px-4 py-5' },
      					body: { padding: '', base: 'divide-y divide-gray-200 dark:divide-gray-700' },
      					footer: { padding: 'p-4' }
    }"
				  >
						<template #header >
							  <h2 class = "font-semibold text-xl text-gray-900 dark:text-white leading-tight" >
									{{ key }}
							  </h2 >

						</template >
						<template #default >

							  <pre >{{ value }}</pre >

						</template >
				  </UCard >


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
