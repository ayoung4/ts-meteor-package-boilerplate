import * as chai from 'chai';

import { name } from 'meteor/ayoung4:ts-meteor-package-boilerplate';

describe('ts-meteor-package-boilerplate', function () {

    it('exports a name', function () {
        chai.expect(name).to.be.a('string');
    });

});
