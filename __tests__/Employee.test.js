const employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Sophie');
  
    expect(employee.name).toBe('Sophie');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name from the getName method", () => {
    const employee = new Employee('Sophie');
  
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));

});

test("gets employee's id from the getId method", () => {
    const employee = new Employee('Sophie');
  
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee's email from the getEmail method", () => {
    const employee = new Employee('Sophie');
  
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets 'Employee' from the getRole method", () => {
    const employee = new Employee('Sophie');
  
    expect(employee.getRole()).toEqual("Employee");

});