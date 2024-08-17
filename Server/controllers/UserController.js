const User = require('../models/Usermodel')

//code for getting user details
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        console.log(users);
    } catch (error) {
        console.log(error)
    }
}

//code for creating a new user
const postUsers = async (req, res) => {
    const { email, password } = req.body;
    try {
        const users = await User.findOne({ email });
        if (!users) {
            res.json('No user Exist');
        }
        if (users.email === email && users.password === password) {
            res.json(users.role);
            console.log(users.role);
        }
        else if (users.email === email && users.password === password) {
            res.json(users.role);
            console.log(users.role);
        }

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

module.exports = { getUsers, postUsers };