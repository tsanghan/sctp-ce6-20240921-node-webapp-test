const userModel = require('../models/user.js')

function filterItemsByID(itemList, id) {
    item = itemList.find((elem) => elem.id == id)
    if (item == undefined) {
        return {}
    }
    return item
}

function getUsers() {
    let userList = userModel.retrieveUsers()
    return userList
}

function getUserByID(id) {
    let userList = userModel.retrieveUsers()
    return filterItemsByID(userList, id)
}

module.exports = {
    getUsers: getUsers,
    getUserByID: getUserByID,
    _filterItemsByID: filterItemsByID,
};
