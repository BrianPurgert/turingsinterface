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

        <myJson
                :data="datafile"
                v-model:selectedValue="selectedPath"
                :selectOnClickNode="true"
                :showSelectController="true"

                showIcon="true"
                :deep="4"
        ></myJson>


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
