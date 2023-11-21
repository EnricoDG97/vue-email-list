const { createApp } = Vue

  createApp({
    data() {
      return {
        email: "",
      }
    },
    methods: {
        // funzione che chiama un email random dal server boolean
        generateEmails () {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp.data.response);
                })
        },
    },
  }).mount('#app')