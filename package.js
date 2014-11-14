Package.describe({
  summary: "Meteor interface for ES, provides easy methods to river meteor collections aswell.",
  version: "0.0.7",
  name: "brishin:meteor-elasticsearch",
  git: "https://github.com/brishin/meteor-elasticsearch.git"
});

Npm.depends({
  "elasticsearch": "2.1.2",
  "elastic.js": "1.2.0"
});

Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");

  api.use([
    'coffeescript',
    'http',
    'mrt:log'
  ], ['server']);

  api.addFiles([
    'elasticsearch.coffee',
    'methods.coffee'
  ], ['server']);

  api.export('ES', 'server');
});