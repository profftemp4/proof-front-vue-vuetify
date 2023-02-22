import axios from "axios";
export default {
  methods: {
    initial_dataJS() {
      this.loadingData = true;
      this.items.data = [];
      const urlroute = this.$store.getters.getUrlIni + "dataInitialPrin";

      axios({
        url: urlroute,
        method: "POST",
        data: null,
      })
        .then((response) => {
          this.items.data = response.data.JsonData;
          this.session.idUser = response.data.id;
        })
        .catch((error) => {
          console.log("error " + error);
        })
        .finally(() => {
          this.loadingData = false;
        });
    },
    dataCutomerJS(customer_id) {
      this.esperar = true;
      this.customerDataView = [];
      const urlroute =
        this.$store.getters.getUrlIni + "dataCustomer/" + customer_id;
      axios({
        url: urlroute,
        method: "GET",
        data: null,
      })
        .then((response) => {
          this.customerDataView = response.data.JsonData[0];
        })
        .catch((error) => {
          console.log("error " + error);
        })
        .finally(() => {
          this.customer_imageJS(this.customerDataView.image_name);
        });
    },
    customer_imageJS(dataImage) {
      this.esperar = true;
      this.items.data = [];
      const data = { dataImage: dataImage };
      const urlroute = this.$store.getters.getUrlIni + "customerImage";
      axios({
        url: urlroute,
        method: "POST",
        data: data,
        responseType: "blob",
      })
        .then((response) => {
          let blob = new Blob([response.data]);
          let blobUrl = URL.createObjectURL(blob);
          this.customerImage = blobUrl;
        })
        .catch((error) => {
          console.log("error " + error);
        })
        .finally(() => {
          this.esperar = false;
        });
    },
  },
};
