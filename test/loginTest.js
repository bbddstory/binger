let assert = chai.assert;

describe('Login', function () {
    it('should start empty', function () {
        let user = '', pwd = '';

        assert.equal(user.length, 0);
    });
});