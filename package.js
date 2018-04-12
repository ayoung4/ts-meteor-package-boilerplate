Package.describe({
    name: 'ayoung4:ts-meteor-package-boilerplate',
    version: '0.0.1',
    summary: 'boilerplate for creating a meteor package in typescript',
    git: 'https://github.com/ayoung4/ts-meteor-package-boilerplate',
    documentation: 'README.md'
});

Package.registerBuildPlugin({
    name: 'typescript',
    use: ['barbatus:typescript-compiler'],
    sources: ['plugin.js']
});

Package.onUse(function (api) {
    api.versionsFrom('1.6.1.1');
    api.use('isobuild:compiler-plugin@1.0.0');
    api.use('barbatus:typescript-compiler@0.9.12');
    api.use('modules@0.9.2');
    api.imply('barbatus:typescript-runtime@1.0.2');
    api.mainModule('index.ts');
});

Package.onTest(function (api) {
    api.use('meteortesting:mocha');
    api.use('practicalmeteor:chai');
    api.use('modules@0.9.2');
    api.use('ayoung4:ts-meteor-package-boilerplate');
    api.mainModule('tests.ts');
});
