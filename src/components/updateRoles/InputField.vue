<template>
    <div>
        <label>{{ label }}</label>
        <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    name: "InputField",
    props: {
        label: {
            type: String,
            default: "Label",
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "Placeholder",
        },
        value: {
            type: String,
            default: "",
        },
    },
};
</script>

<style>

</style>