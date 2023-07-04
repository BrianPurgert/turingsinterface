<template>
	  <UContainer class="mt-4">
			<UCard>
				  <UInput v-model="lookupUrl" @keyup.enter="lookup" />
				  <UButton variant="outline">button</UButton>
				  <p>This is the body with a <UBadge>Badge</UBadge></p>
			</UCard>
	  </UContainer>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios' // You'll need to install and import axios to make HTTP requests

const lookupUrl = ref('')

const lookup = async () => {
	if (lookupUrl.value) {
		const response = await axios.get(`http://dev.brianpurgert2.com:3000/?url=${encodeURIComponent(lookupUrl.value)}`)
		// handle the response here
	}
}
</script>