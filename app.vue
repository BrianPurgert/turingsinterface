<template>
  <UContainer class="mt-4">
    <UCard>
      <template #header>
        <UInput
            v-model="df_url"
            name="df_url"
            type="url"
            placeholder="https://..."
            icon="i-heroicons-globe-alt"
            :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
                variant="ghost"
                @click="execute"
                icon="i-heroicons-bars-arrow-down"
            >
            </UButton>

            <UButton
                v-show="df_url !== ''"
                color="gray"
                variant="link"
                icon="i-heroicons-x-mark-20-solid"
                :padded="false"
                @click="df_url = ''"
            />
          </template>

        </UInput>
        <UButton
            icon="i-heroicons-beaker"
            @click="df_url = 'https://getthis.page/test_page.html'"
            color="primary"
            variant="link"
            label="Test Page"
            :trailing="false"
        />
        <UButton
            icon="i-heroicons-shopping-cart"
            @click="df_url = 'https://www.gsaadvantage.gov/advantage/ws/catalog/product_detail?gsin=11000058302095'"
            color="primary"
            variant="link"
            label="Product Detail Page"
            :trailing="false"
        />
        <UButton
            icon="i-heroicons-building-library"
            @click="df_url = 'https://www.gsaelibrary.gsa.gov/ElibMain/scheduleList.do?catid=1066&famid=1060&sched=yes'"
            color="primary"
            variant="link"
            label="GSA eLibrary"
            :trailing="false"
        />
        <UButton
            icon="i-heroicons-building-library"
            @click="df_url = 'https://www.amazon.com/gp/bestsellers/'"
            color="primary"
            variant="link"
            label="Amazon"
            :trailing="false"
        />

      </template>
      <template #default>
        <template v-if="pending">
          <div class="flex items-center space-x-4">
            <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }"/>
            <div class="space-y-2">
              <USkeleton class="h-4 w-[250px]"/>
              <USkeleton class="h-4 w-[200px]"/>
            </div>
          </div>
        </template>
        <template v-else-if="error">
          <div class="mt-4">{{ error }}</div>
        </template>
        <template v-else-if="datafile">
          <vue-json-pretty
              :data="datafile"
              deep="3"
              v-model:selectedValue="selectedPath"
              :selectOnClickNode="true"
              :showSelectController="true"
              :showDoubleQuotes="false"
              showIcon="true"
              class="mt-10"
          />


        </template>
      </template>
      <template #footer>


      </template>
    </UCard>


  </UContainer>

</template>

<style>


</style>

<script setup lang="ts">


const df_url = ref('')
const selectedPath = ref('')

const {data: datafile, pending, error, execute} = await useFetch('https://getthis.page/api', {
  query: {url: df_url}, immediate: false, watch: false
})


</script>
