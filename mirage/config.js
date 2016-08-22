export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  //this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id'); */


  this.get('/dashboards', function() {
    return { "dashboard": [{ 
      id: 1,
      name: 'Backup Performance',
      text: 'Yadda yadda yadda.'},
    { id: 2,
      name: 'Finance',
      text: 'Yeah yeah yeah.'}]
    };
  });

 this.get('/dashboard/1', function() {
    return { "dashboard": [{ 
      id: 1,
      title: 'Dashboard #1',
      text: 'Yadda yadda yadda.'}]
    };
  });

 this.get('/dashboard/2', function() {
    return { "dashboard": [{ 
      id: 2,
      title: 'Dashboard #2',
      text: 'Yeah yeah yeah.'}]
    };
  });

  /*
    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
