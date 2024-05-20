<template xmlns = "http://www.w3.org/1999/html" >
	  <UHorizontalNavigation :links="links"
			class='bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800 pl-3 '>


		<template #default="{ link }">
	  		<span class="group-hover:text-primary relative ">{{ link.label }}</span>
		</template>




	  </UHorizontalNavigation>

	  <ColorModeButton />
	  <UContainer class = "mt-4" >

			<UCard >
				  <template #header >
						<UCard class = "" >
							  <h1 >Heuristic Universal Webpage Parser Demo</h1 >
							  <div class = "mt-3 mb-0 text-gray-600 dark:text-gray-300 text-sm space-y-3" >
									<p >
										  enter the URL of the page you want to scrape and press enter. The tool will fetch the
										  page, parse it, transform the page data, The result will be structured JSON.


										  <br /><a href = "https://getthis.page/test_page.html"
										  class = "text-blue-600 font-bold" >https://getthis.page/test_page.html</a ><br />
										  <a href = "https://getthis.page/api?url=https://getthis.page/test_page.html"
												class = "text-blue-600 font-bold" >https://getthis.page/api?url=https://getthis.page/test_page.html</a >
										  (large page)

									</p >
							  </div >
						</UCard >
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
						<UButton
							  icon = "i-heroicons-beaker"
							  @click = "df_url = 'https://getthis.page/test_page.html'"

							  variant = "link"
							  label = "Test Page"

						/>
						<UButton
							  icon = "i-heroicons-shopping-cart"
							  @click = "df_url = 'https://www.gsaadvantage.gov/advantage/ws/catalog/product_detail?gsin=11000058302095'"

							  variant = "link"
							  label = "Product Detail Page"

						/>
						<UButton
							  icon = "i-heroicons-building-library"
							  @click = "df_url = 'https://www.gsaelibrary.gsa.gov/ElibMain/scheduleList.do?catid=1066&famid=1060&sched=yes'"

							  variant = "link"
							  label = "GSA eLibrary"

						/>
						<UButton
							  icon = "i-heroicons-building-library"
							  @click = "df_url = 'https://www.amazon.com/gp/bestsellers/'"
							  variant = "link"
							  label = "Amazon"
						/>
						<UButton
							  icon = "i-heroicons-building-library"
							  @click = "df_url = 'https://www.gsaadvantage.gov/advantage/ws/search/mfr_list?q=1:4ADV.OFF.*&c=25&s=10&searchType=1'"
							  variant = "link"
							  label = "Gov"
						/>
						<UButton
							  icon = "i-heroicons-building-library"
							  @click = "df_url = 'https://www.gsaadvantage.gov/advantage/ws/search/vnd_list?q=1:4ADV.OFF.*&c=25&s=10&searchType=1'"
							  variant = "link"
							  label = "Gov"
						/>
						<UButton
							  icon = "i-heroicons-building-library"
							  @click = "df_url = 'https://www.gsaadvantage.gov/advantage/ws/search/vnd_list?q=1:4****&listFor=All'"
							  variant = "link"
							  label = "Gov"
						/>


				  </template >
				  <template #default >
						<template v-if = "pending" >
							  <div class = "flex items-center space-x-4" >
									<USkeleton class = "h-12 w-12" :ui = "{ rounded: 'rounded-full' }" />
									<div class = "space-y-2" >
										  <USkeleton class = "h-4 w-[250px]" />
										  <USkeleton class = "h-4 w-[200px]" />
									</div >
							  </div >
						</template >
						<template v-else-if = "error" >
							  <div class = "mt-4" >{{ error }}</div >
						</template >
						<template v-else-if = "datafile" >
							  <vue-json-pretty
									:data = "datafile"
									deep = "3"
									v-model:selectedValue = "selectedPath"
									:selectOnClickNode = "true"
									:showSelectController = "true"
									:showDoubleQuotes = "false"
									showIcon = "true"
									class = "mt-10"
							  />


						</template >
				  </template >
				  <template #footer >

				  </template >
			</UCard >


	  </UContainer >

</template >

<style >


</style >

<script setup lang = "ts" >
const route = useRoute()

const links = [{
	label: 'Portfolio',
	to: 'https://brianpurgert2.com'
}, {
	label: 'Home',
	to: '/'
}]

const df_url       = ref('')
const selectedPath = ref('')

const {data: datafile, pending, error, execute} = await useFetch('https://getthis.page/api', {
	query: {url: df_url}, immediate: false, watch: false
})


</script >
