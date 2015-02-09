Router.configure({
   layoutTemplate: 'layout',
   yieldTemplate: {
      header: {
         to: 'header'
      },
      footer: {
         to: 'footer'
      }
   }
});

Router.map(function() {
    this.route('home', {path: '/'});

    // Admin routes:
    this.route('admin', {path: '/admin'});
    this.route('users', {path: '/admin/users'});
    this.route('countries', {path: '/countries'});
});
