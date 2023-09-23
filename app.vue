<template>
    <UContainer class="mt-4">
        <UCard>
            <template #header/>

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

            <template #footer/>
        </UCard>
        <UCard>
            <myJson
                    :data="datafile"
                    v-model:selectedValue="selectedPath"
                    :selectOnClickNode="true"
                    :showSelectController="true"

                    showIcon="true"
                    :deep="4"
            ></myJson>

            <UAccordion :items="items">
                <template #item="{ item }">
                    <p class="italic text-gray-900 dark:text-white text-center">
                        {{ item.description }} </p>
                </template>
                <template #getting-started>

                </template>
                <template #installation="{ description }">

                </template>
            </UAccordion>


            <u-card v-for="(value, key, index) in datafile" :key="key" :label="key" class="m-1">
                <span class="text-xl">{{ key }}</span>
                <u-card v-for="(a_value, a_key, a_index) in value" :key="a_key">


                </u-card>
            </u-card>


        </UCard>

    </UContainer>

</template>

<script setup lang="ts">
import Displaydatafile from "~/Displaydatafile.vue"

const items = [{
    label: "Getting Started", icon: "i-heroicons-information-circle", defaultOpen: true, slot: "getting-started"
}, {
    label: "Installation", icon: "i-heroicons-arrow-down-tray", defaultOpen: true, slot: "installation"
}]
const df_url = ref("")


const {data: datafile, pending, error, execute} = await useFetch("https://getthis.page/api", {
    query: {url: df_url}, immediate: false, watch: false
})
const selectedPath = ref("")


</script>
