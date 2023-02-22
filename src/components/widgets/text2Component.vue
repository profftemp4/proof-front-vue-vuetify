<template>
    <div style="width:100%">
        <v-text-field :value="descripcion" :label="titulo" :color="colores.primario" dense filled readonly></v-text-field>
    </div>
</template>
<script>
export default {
    props: ['colores', 'titulo', 'descripcion'],
    data: () => ({
    }), // FIN DE DATA
    created() { }, // FIN DE CREATED
    watch: {}, // FIN DE WATCH
    methods: {} // FIN DE METODOS
}
</script>