<template>
    <v-layout row wrap>
        <v-flex xs12>
            <div>
                hello {{ name }}
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            name: 'borja'
        }
    }
}
</script>

<style>
</style>