cy.get('input').type('Apple')
cy.contains('Submit').click() // Click on first el containing 'Welcome'
cy.contains('Sıcak Pizza!').click() // Click on first el containing 'Welcome'
cy.get('[type="checkbox"]').check('US')