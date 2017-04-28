import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addPoll() {
      var title = this.get('title')

      var newPoll = this.store.createRecord('poll', {
        title: title
      });

      newPoll.save()

      //Go to new poll
    }
  }

});
