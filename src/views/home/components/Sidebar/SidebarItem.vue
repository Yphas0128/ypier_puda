<template>
    <div v-if="!item.hidden">
    </div>
</template>
<script>
export default {
    props: {
        // route object
        item: {
            type: Object,
            required: true
        },
        isNest: {
            type: Boolean,
            default: false
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>

</style>