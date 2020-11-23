new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        email: "",
        password: "",
        loggedIn: false, // controls the display
        errorMessage: ""
    },
    methods: {
        login() {
            if (this.password == "secret") { // TODO: call REST service
                this.loggedIn = true
            } else {
                this.errorMessage = "No entry ... Try again"
            }
        },
        logout() {
            this.loggedIn = false
        }
    }
})