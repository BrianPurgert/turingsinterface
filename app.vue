<template >
	  <UContainer class = "mt-4" >
			<UCard >
				  <UInput
						v-model = "lookupUrl"
						icon = 'i-heroicons-document-arrow-down'
						:loading = "false"
						trailing
						placeholder = "https://website.com/products?keys=values..."
						@keyup.enter = "lookup"
				  />
				  <UButton variant = "outline" >button</UButton >
				  <p >This is the body with a
						<UBadge >Badge</UBadge >
				  </p >
			</UCard >
	  </UContainer >
</template >

<script setup >

</script >
<!-- "gsin": {
        "12000012828225": {
            "url": "/advantage/ws/catalog/product_detail?gsin=12000012828225",
            "content": [
                "5049D5U",
                "ThinkCentre M81 5049D5U Desktop Computer",
                "Mfr: Lenovo Group Limited",
                "from",
                "$",
                "1,000.12",
                "From 14 source",
                "s",
                " ",
                "Includes:",
                "d",
                "w",
                "o",
                "wo",
                "ew",
                "8a",
                "dv",
                "h",
                "Description",
                "Premium performers. Efficient cost-cutters. Convenient space-savers. Whatever your need, we have the professional-strength desktops to meet it. All designed to simplify management,..."
            ]
        },-->