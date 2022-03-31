const intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Phyllis');
  
    expect(intern.name).toBe('Phyllis');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name from the getName method", () => {
    const intern = new Intern('Phyllis');
  
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));

});

test("gets intern's id from the getId method", () => {
    const intern = new Intern('Phyllis');
  
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("gets intern's school from the getSchool method", () => {
    const intern = new Intern('Phyllis');
  
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("gets intern's email from the getEmail method", () => {
    const intern = new Intern('Phyllis');
  
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("gets 'Intern' from the getRole method", () => {
    const intern = new Intern('Phyllis');
  
    expect(intern.getRole()).toEqual("Intern");

});