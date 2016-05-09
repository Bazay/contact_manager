ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#contact-list-item',

    events: {
      "click": "highlightName",
      "click button.js-delete": 'removeUser'
    },

    highlightName: function() {
      this.$el.toggleClass('warning');
    },
    removeUser: function(e) {
      e.stopPropagation();
      this.model.collection.remove(this.model);
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: '#contact-list',
    childView: List.Contact,
    itemViewContainer: 'tbody'
  })
});
