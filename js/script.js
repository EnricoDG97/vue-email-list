const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [],
      }
    },
    methods: {
        // funzione che chiama un email random dal server boolean
        generateEmails(quantity) {
            // svuoto array prima della generazione, così ad ogni click mi cancella le email generate col click precendete
            this.emails = [];
            // ciclo la funzione per la quantità specificata (in html)
            for(let i=0; i < quantity; i++) {
                axios
                    // chiedo ad axios una mail casuale dal suo database
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    // la mail generata viene salvata in una constante e pushata nell'array dei data
                    .then((resp) => {
                        console.log(resp.data.response);
                        const generatedEmail = resp.data.response;
                        this.emails.push(generatedEmail);
                    })
            }
        },
    },
  }).mount('#app')