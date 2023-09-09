const { Resource } = require("../Classes/Resource/Resource");

describe('Testing Class Resource', () => {
    const casinha = new Resource("Casinha", "casinha.com.br", "lgbt inclusion", "Rio de Janeiro", false);
    it("should create a new instace Resource", () => {
        expect(casinha).toBeInstanceOf(Resource);
        expect(casinha.name).toBe("Casinha");
        expect(casinha.website).toBe("casinha.com.br");
        expect(casinha.theme).toBe("lgbt inclusion");
        expect(casinha.city).toBe("Rio de Janeiro");
        expect(casinha.online).toBe(false)
        expect(casinha.id).toBe(1)
    })

    it("should test the array allResources", () => {
        expect(Resource.allResources).toEqual([{"name": "Casinha"}])
        expect(Resource.allResources.length).toBe(1)
    })

    it("should test the set and get description", () => {
        casinha.description ="testing"
        expect(casinha.description).toBe("testing")
    })


})