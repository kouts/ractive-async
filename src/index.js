import App from './App';

// initialize dependencies and whatnot here
// for instance, transitions, decorators, and global components are good things to register here
// you can import deps from node_modules and they will be included in your bundle by webpack

// this is also a good place to set up Ractive style variables
Ractive.styleSet({
  fg: '#729d34',
  bg: '#fefefe'
});

// then spin up your main instance
window.app = new App({
  el: 'body'
});
