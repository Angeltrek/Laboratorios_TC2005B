const bcrypt = require('bcrypt');

class Users {
    constructor() {
        this.user = null;
    }

    async login(username, password) {
        try {
            const response = await fetch(`https://dummyjson.com/users/search?q=${username}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const userData = await response.json();
            const user = userData.users[0];

            if (!user) {
                throw new Error('User not found');
            }
            const passwordMatch = (password === user.password ? true : false)

            if (!passwordMatch) {
                throw new Error('Invalid password');
            }

            return user;

        } catch (error) {
            console.error('Error fetching or validating user data:', error);
            throw error;
        }
    }
}

module.exports = new Users();