const Users = require('../users/users-model');

const db = require('../data/dbConfig');

describe('users-model', () => {
    it('should insert user', async () => {
        await Users.add({username: 'bif6', password: "password"});
        const testUsers = await db('users');
        expect(testUsers).toHaveLength(5);
    });

    it('should delete a user', async () => {
        await Users.remove(10)
        const testUsers = await db('users');
        expect(testUsers).toHaveLength(4);
    })
})