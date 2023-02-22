<template>
    <v-layout row justify-center>
        <v-dialog v-model="esperar" persistent max-width="450">
            <v-card :color="colores.primario">
                <v-card-text class="pt-4">
                    <v-progress-linear color="white" indeterminate></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
export default {
    props: ['colores', 'esperar'],
    data: () => ({
    }), // FIN DE DATA
    created() { }, // FIN DE CREATED
    watch: {}, // FIN DE WATCH
    methods: {} // FIN DE METODOS
}
</script>