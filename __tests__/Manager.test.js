const Manager = require('../lib/Manager');



test('creates a Manager object', () => {
    const manager = new Manager("Dave", 123, "dave@gmail.com", 321);
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name from the getName method", () => {
    const manager = new Manager("Dave", 123, "dave@gmail.com", 321);
  
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));

});

test("gets manager's id from the getId method", () => {
    const manager = new Manager("Dave", 123, "dave@gmail.com", 321);
  
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("gets manager's email from the getEmail method", () => {
    const manager = new Manager("Dave", 123, "dave@gmail.com", 321);
  
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("gets 'manager' from the getRole method", () => {
    const manager = new Manager("Dave", 123, "dave@gmail.com", 321);
  
    expect(manager.getRole()).toEqual("Manager");

});