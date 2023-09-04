<template >
	  <UContainer class = "mt-4" >
			<UCard >
				  <UAccordion :items = "items" >
						<template #item = "{ item }" >
							  <p class = "italic text-gray-900 dark:text-white text-center" >
									{{ item.description }} </p >
						</template >
						<template #getting-started >
							  <div class = "flex flex-col justify-center items-center gap-1" >
									<NuxtLink
										  to = "/getting-started"
										  class = "flex items-end gap-1.5 font-bold text-xl text-gray-900 dark:text-white"
									>
										  <Logo class = "w-8 h-8 text-primary-500 dark:text-primary-400" />
										  <span class = "hidden sm:block" >NuxtLabs</span ><span
										  class = "sm:text-primary-500 dark:sm:text-primary-400" >UI</span >
									</NuxtLink >
									<p class = "text-sm text-gray-500 dark:text-gray-400" >
										  Fully styled and customizable components for Nuxt. </p >
							  </div >
						</template >
						<template #installation = "{ description }" >
							  <div class = "flex flex-col justify-center items-center gap-1 mb-4" >
									<h3 class = "text-xl font-bold text-gray-900 dark:text-white" >
										  Installation </h3 >
									<p class = "text-sm text-gray-500 dark:text-gray-400" >
										  Install <code >@nuxthq/ui</code > dependency to your project: </p >
									<p >
										  {{ description }} </p >
							  </div >
							  <div class = "flex flex-col items-center" >
									<code >$ npm install @nuxtlabs/ui</code >
									<code >$ nnpm install -D @nuxthq/ui</code >
									<code >$ pnpm i -D @nuxthq/ui</code >
							  </div >
						</template >
				  </UAccordion >

				  <span >URL:   {{ df_url }} </span >
				  <pre >{{ datafile }} </pre >
				  <span >pending: {{ pending }} </span >
				  <span >error:{{ error }} </span >
			</UCard >
			<UCard >
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
									color = "blue"
									@click = "execute"

							  >Fetch
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


const {data: datafile, pending, error, execute} = await useFetch('http://dev.brianpurgert2.com/api', {
		query: {url: df_url}, immediate: false, watch: false
})


const fetchData = () => {
		execute()
}


</script >
