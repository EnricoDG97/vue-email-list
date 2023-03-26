const { createApp } = Vue;
createApp({
    data() {
        return {
            emails: [],
        }
    },

    created() {
        this.genEmails(10);
    },

    mounted () {

    },

    methods: {
        genEmails(quantity) {
            for(let i=0; i < quantity; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    const mailGenerated = res.data.response;
                    this.emails.push(mailGenerated);
                });
            }
        },
    },
}).mount('#app');
