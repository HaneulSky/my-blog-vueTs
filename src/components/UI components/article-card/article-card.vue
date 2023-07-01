<template>
    <div>
        <img src="" alt="" />
        <p>{{ props.title }}</p>
        <ul>
            <li>{{props.description}}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">

const props = defineProps ({
    title: {
        type: String,
        default: "",
    },
    description: {
      type: String,
      default: "",
    }
});
</script>
