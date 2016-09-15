export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';   // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';   // make this `api`, for example, if your API is namespaced
  this.timing = 400;        // delay for each request, automatically set to 0 during testing


  this.get('/dashboards', function() {
    return { "dashboard": [{ 
      id: 1,
      name: 'Backup Performance',
      text: 'Yadda yadda yadda.'},
    { id: 2,
      name: 'Finance',
      text: 'Yeah yeah yeah. $$$'},
    { id: 3,
      name: 'Additional Dashboard',
      text: 'Ohhhhh wow.'}]
    };
  });

 this.get('/dashboards/1', function() {
    return { "dashboard": [{ 
      id: 1,
      name: 'Backup Performance',
      text: 'Yadda yadda yadda.',
      display: {
        "backup-health": 1,
        "error-rates": 0,
        "finance": 0
        }

      }]
    };
  });

 this.get('/dashboards/2', function() {
    return { "dashboard": [{ 
      id: 2,
      name: 'Finance',
      text: 'Yeah yeah yeah. $$$',
      display: {
        "backup-health": 0,
        "error-rates": 0,
        "finance": 1
        }
      }]
    };
  });

  this.get('/dashboards/3', function() {
      return { "dashboard": [{ 
        id: 3,
        name: 'Additional Dashboard',
        text: 'Ohhhhh wow.',
        display: {
          "backup-health": 1,
          "error-rates": 1,
          "finance": 0
          }
        }]
      };
    });


 this.get('/accounts', function() {
    return { "account": [{ 
      id: 'XC168SF86Y5',
      name: 'Dominic',
      lastname: 'Brause',
      email: 'dominic.brause@emc.com',
      role: 'Administrator',
      partnername: 'Mozy Inc',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAhCAAAAJGUwMTBlMTc4LWQxN2MtNDQ1YS1iZGQ4LTg3NzNhYTVhNzViMw.jpg'}]
    };
  });

}
