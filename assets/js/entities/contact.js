ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _) {
  Entities.Contact = Backbone.Model.extend({
    defaults: {
      firstName: '',
      lastName: '',
      phoneNumber: 'No phone number!'
    }
  });

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    comparator: function(contact){
      return contact.firstName + ' ' + contact.lastName;
    }
  })

  var contacts;

  var initializeContacts = function(){
    contacts = new Entities.ContactCollection([
      {
        id: 1,
        firstName: 'Baron',
        lastName: 'Bloomer',
        phoneNumber: '07482954786'
      },
      {
        id: 2,
        firstName: 'Baron',
        lastName: 'Blue'
      },
      {
        id: 3,
        firstName: 'Benjamin',
        lastName: 'Button'
      },
      {
        id: 4,
        firstName: 'Robbie',
        lastName: 'Williams'
      },
      {
        id: 5,
        firstName: 'John',
        lastName: 'Mayer'
      }
    ]);
  };

  var API = {
    getContactEntities: function() {
      if (contacts == undefined) {
        initializeContacts();
      }
      return contacts;
    }
  };

  ContactManager.reqres.setHandler("contact:entities", function(){ 
    return API.getContactEntities();
  });
});
