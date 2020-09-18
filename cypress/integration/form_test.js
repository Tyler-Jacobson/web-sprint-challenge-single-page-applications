describe("Order Pizza", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  })

  // Variable declarations

  const name = () => cy.get("input[name='name']")
  const instructions = () => cy.get("input[name='instructions']")
  const size = () => cy.get("select[name='size']")
  const submit = () => cy.get(".submitButton")

  const pepperoni = () => cy.get("input[name='pepperoni']")
  const pineapple = () => cy.get("input[name='pineapple']")
  const olives = () => cy.get("input[name='olives']")
  const bacon = () => cy.get("input[name='bacon']")

  const eight = () => cy.get(".8")


  // Tests here

  it("Verify Form Fields exist", () => {
    name().should('exist')
    
    size().should('exist')

    pepperoni().should('exist')
    pineapple().should('exist')
    olives().should('exist')
    bacon().should('exist')

    instructions().should('exist')
    submit().should('exist')
  })

  it("Validate Form Fields", () => {
     
    name()
    .should('have.value', '')
    .type('Your Name')
    .should('have.value', 'Your Name')

    // size()
    // .select(eight)

    pepperoni()
    .should('not.have.checked')
    .click()
    .should('have.checked')

    pineapple()
    .should('not.have.checked')
    .click()
    .should('have.checked')

    olives()
    .should('not.have.checked')
    .click()
    .should('have.checked')

    bacon()
    .should('not.have.checked')
    .click()
    .should('have.checked')

    
    submit() //submit the form
    .click()

    name()
    .should('have.value', '')

    pepperoni()
    .should('not.have.checked')

    pineapple()
    .should('not.have.checked')

    olives()
    .should('not.have.checked')

    bacon()
    .should('not.have.checked')

  })

})
