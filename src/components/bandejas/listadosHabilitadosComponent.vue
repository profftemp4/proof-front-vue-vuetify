<template>
    <div style="width:100%">
        <v-list-item link class="pa-0">
            <v-row no-gutters>
                <v-col cols="12" md="2">
                    <v-row no-gutters align="center">
                        <v-col cols="12" md="2">
                            <v-card width="25" height="100" color="green"></v-card>
                        </v-col>
                        <v-col cols="12" md="9" style="font-size:18px" class="text-center" v-if="item.names">
                            <v-icon size="50">mdi-account-check</v-icon>
                            <v-card-text class="pa-0" style="white-space:pre-wrap;">
                                <div>{{ item.names }}</div>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2">
                    <v-row no-gutters align="center">
                        <v-col cols="12" md="9" style="font-size:18px" class="text-center" v-if="item.image_name">
                            <v-icon size="50">mdi-file-image</v-icon>
                            <v-card-text class="pa-0" style="white-space:pre-wrap;">
                                <div>{{ item.image_name }}</div>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="1">
                    <v-row no-gutters align="center">
                        <v-col cols="12" md="9" style="font-size:18px" class="text-center" v-if="item.document">
                            <v-icon size="50">mdi-card-account-details-outline</v-icon>
                            <v-card-text class="pa-0" style="white-space:pre-wrap;">
                                <div>{{ item.document }}</div>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2">
                    <v-row no-gutters align="center">
                        <v-col cols="12" md="9" style="font-size:18px" class="text-center" v-if="item.email">
                            <v-icon size="50">mdi-email-outline</v-icon>
                            <v-card-text class="pa-0" style="white-space:pre-wrap;">
                                <div>{{ item.email }}</div>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="1">
                    <v-row no-gutters align="center">
                        <v-col cols="12" md="9" style="font-size:18px" class="text-center" v-if="item.phone_number">
                            <v-icon size="50">mdi-cellphone</v-icon>
                            <v-card-text class="pa-0" style="white-space:pre-wrap;">
                                <div>{{ item.phone_number }}</div>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="3">
                    <v-row no-gutters align="center">
                        <v-col cols="12" md="11" style="font-size:18px" class="text-center" v-if="item.Observations">
                            <v-icon size="50">mdi-clipboard-outline</v-icon>
                            <v-card-text class="pa-0" style="white-space:pre-wrap;">
                                <div>{{ item.Observations }}</div>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="1" align-self="center">
                    <v-row no-gutters align="center">
                        <v-col cols="12" md="1" align-self="center" class="text-center">
                            <v-btn @click="ver_cliente(item.id)" icon color="blue"><v-icon>mdi-pencil</v-icon></v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-list-item>
        <div style="height:5px"></div>
        <v-divider></v-divider>
        <div style="height:5px"></div>
    </div>
</template>
    
<script>

export default {
    name: 'listadoHabilitadoC',
    components: {
    },

    props: ['colores', 'item', 'session'],
    data: () => ({
        colorVencido: 'green',
        colorVReplica: 'green',
        datosReplicaActual: [],
        nombreSeparado: null
    }),
    created() {
    },
    methods: {
        ver_cliente(customerId) {
            this.$emit('view_customer', customerId)
        }
    }
}
</script>
<style scoped>
.parpadea {
    animation-name: parpadeo;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    -webkit-animation-name: parpadeo;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
}

@-moz-keyframes parpadeo {
    0% {
        opacity: 1.0;
    }

    50% {
        opacity: 0.0;
    }

    100% {
        opacity: 1.0;
    }
}

@-webkit-keyframes parpadeo {
    0% {
        opacity: 1.0;
    }

    50% {
        opacity: 0.0;
    }

    100% {
        opacity: 1.0;
    }
}

@keyframes parpadeo {
    0% {
        opacity: 1.0;
    }

    50% {
        opacity: 0.0;
    }

    100% {
        opacity: 1.0;
    }
}
</style>
    