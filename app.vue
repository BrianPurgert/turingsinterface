<template >
	  <UContainer class = "mt-4" >
			<UCard >
				  <UInput v-model = "lookupUrl" @keyup.enter = "lookup" />
				  <UButton variant = "outline" >button</UButton >


				  <template >
						<UForm
							  ref = "form"
							  :schema = "schema"
							  :state = "state"
							  @submit.prevent = "submit"
						>
							  <UFormGroup label = "Email" name = "email" >
									<UInput v-model = "state.email" />
							  </UFormGroup >

							  <UFormGroup label = "Password" name = "password" >
									<UInput v-model = "state.password" type = "password" />
							  </UFormGroup >

							  <UButton type = "submit" >
									Submit
							  </UButton >
						</UForm >
				  </template >


			</UCard >
	  </UContainer >
</template >

<script setup lang = "ts" >
import { object, string, InferType } from 'yup'

const schema = object({
	email: string().email('Invalid email').required('Required'),
	password: string()
		.min(8, 'Must be at least 8 characters')
		.required('Required')
})

const state = ref({
	email: undefined,
	password: undefined
})

const form = ref()

async function submit() {
	await form.value!.validate()
	// Do something with state.value
	// 		fetch
}


</script >