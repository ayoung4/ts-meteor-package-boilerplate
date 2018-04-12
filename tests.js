import { name } from 'meteor/ayoung4:ts-meteor-package-boilerplate';
import { chai } from 'meteor/practicalmeteor:chai';

describe('ts-meteor-package-boilerplate', () => {

    it('exports a name', () => {
        chai.expect(name).to.be.a('string');
    });

});
