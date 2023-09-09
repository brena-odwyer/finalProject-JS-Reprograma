const { Resource } = require("../Classes/Resource/Resource");
const { Workshop } = require("../Classes/Resource/Workshop");

describe('Testing Class Workshop', () => {
    let workshop; 
    
    beforeEach(() => {
        workshop = new Workshop("Workshop Name", "workshop.com", "Coding", "Workshop City", true, "2023-09-15", "In-Person");
    });

    it("should create a new instance of Workshop", () => {
        expect(workshop).toBeInstanceOf(Workshop);
        expect(workshop.name).toBe("Workshop Name");
        expect(workshop.website).toBe("workshop.com");
        expect(workshop.theme).toBe("Coding");
    });

    it("should extend the Resource class", () => {
        expect(workshop).toBeInstanceOf(Resource); // Workshop should be an instance of Resource
    });

    it("should have the workshopInformation getter", () => {
        const expectedInformation = "The workshop Workshop Name is In-Person on 2023-09-15";
        expect(workshop.workshopInformation).toBe(expectedInformation);
    });
});
