class Login {
    static noofuser = 0;
 /*   visitpage() {
        cy.visit("https://practice.expandtesting.com/register");
    }

    /*    loginUserCred(username, password) {
            this.username = username;
            this.password = password;
            this.noofuser++;
        }
        entercrede() {
            cy.get('input[id="username"]').click().type(this.username)
            cy.get('input[id="password"]').click().type(this.password)
            cy.get('input[id="confirmPassword"]').click().type(this.password)
            cy.get('button[type="submit"]').click()
        }
            */
    tryLoginFunct(username, password) {

        this.username = username;
        this.password = password;
        Login.noofuser++;
               cy.visit("https://practice.expandtesting.com/register");

        cy.get('input[id="username"]').click().type(this.username)
        cy.get('input[id="password"]').click().type(this.password)
        cy.get('input[id="confirmPassword"]').click().type(this.password)
        cy.get('button[type="submit"]').click()


 

        console.log("You are " +Login.noofuser+ " user")

    }


}
export default Login;