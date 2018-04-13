Package.describe({
    name: 'ayoung4:ts-meteor-package-boilerplate',
    version: '0.0.1',
    summary: 'boilerplate for creating a meteor package in typescript',
    git: 'https://github.com/ayoung4/ts-meteor-package-boilerplate',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.6.1.1');
    api.use('modules@0.9.2');
    api.mainModule('./dist/index.js');
});

Package.onTest(function (api) {
    api.use('meteortesting:mocha');
    api.use('modules@0.9.2');
    api.use('ayoung4:ts-meteor-package-boilerplate');
    api.mainModule('./dist/tests.js');
});
