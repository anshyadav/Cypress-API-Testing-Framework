describe('REST API Testing', ()=>{
    it('First Test Case',()=>{
        
        //To request the endpoint
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        //To fetch the response
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    })
})