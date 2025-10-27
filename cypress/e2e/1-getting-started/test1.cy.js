context('Login test path', () => {
    it('Test the login with css path', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
            cy.get('input[name="username"]').click().type("evanjeline11@outlook.com")
            cy.get('input[name="password"]').click().type("123456")
cy.get('button[type="submit"]').click()
cy.contains('Invalid credentials').should('be.visible')

    })
    })
    /*
   describe('OLX site availability check', () => {
  it('should return a 200 status code from OLX homepage', () => {
    cy.request('https://www.olx.in')
      .then((response) => {
        // Log the full response for debugging
        cy.log('Status:', response.status)
        cy.log('Body length:', response.body.length)

        // Assert that the response is successful
        expect(response.status).to.eq(200)
        expect(response.body).to.include('<html') // Basic sanity check
      })
  })
})
  */