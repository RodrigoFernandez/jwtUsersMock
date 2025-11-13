const mockUsers = [
    {
        username: "user1",
        password: "pass1",
        token: "token1",
        roles: ["user"]
    },
    {
        username: "admin",
        password: "adminpass",
        token: "token2",
        roles: ["admin", "user"]
    },
    {
        username: "user2",
        password: "pass2",
        token: "token3",
        roles: ["user"]
    }
];

module.exports = { mockUsers };