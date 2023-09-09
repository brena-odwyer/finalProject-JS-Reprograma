const { Admin } = require("../Classes/User/Admin");
const { User } = require("../Classes/User/User")


describe('Testing Class Admin', () => {
    let admin; 

    beforeEach(() => {
        admin = new Admin("Admin User", "admin@example.com", "city", "profession", false);
    });

    it("should create a new instance of Admin", () => {
        expect(admin).toBeInstanceOf(Admin);
        expect(admin.name).toBe("Admin User");
        expect(admin.email).toBe("admin@example.com");
        expect(admin.profession).toBe("profession");
    });

    it("should extend the User class", () => {
        expect(admin).toBeInstanceOf(User); // Admin should be an instance of User
    });

    it("should test the getEmailUser method", () => {
        const user = new User("Maria", "maria@example.com");
        const userEmail = admin.getEmailUser("Maria");

        expect(userEmail).toBe("maria@example.com");
    });

    it("should handle non-existing user in getEmailUser method", () => {
        const userEmail = admin.getEmailUser("Carla");

        expect(userEmail).toBe("This user does not exist");
    });
});
