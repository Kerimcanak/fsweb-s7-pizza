describe('Button Click Test', () => {
    it('Clicks on specified buttons', () => {
        
      // Click on the button that says "ACIKTIM"
      cy.contains('ACIKTIM').click()
  
      // Click on the button that says "Sipariş ver"
      cy.contains('Sipariş ver').click()
  
      // Click on the button that says "Sipariş ver!"
      cy.contains('Sipariş ver!').click()
    })
  })
  