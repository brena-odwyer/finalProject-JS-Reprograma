const { User } = require("../Classes/User/User");

describe('Testing Class User', () => {
    let user; 

    beforeEach(() => {
        user = new User("Brena", "brena@example.com", "New York", "Engineer", false);
    });

    it("should create a new instance of User", () => {
        expect(user).toBeInstanceOf(User);
        expect(user.name).toBe("Brena");
        expect(user.email).toBe("brena@example.com");
        expect(user.profession).toBe("Engineer");
    });

    it("should test the city property (private)", () => {
        expect(user.hasOwnProperty("#city")).toBe(false);
    });

    it("should test the mother property (private)", () => {
        expect(user.hasOwnProperty("#mother")).toBe(false); 
    });

    it("should test the static properties", () => {
        expect(User.allUsers.length).toBe(4);
        expect(User.count).toBe(4);
    });
});
