const generateUniqueId = require('../../utils/generateUniqueId');

describe('Generte Unique ID', ()=>{
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});