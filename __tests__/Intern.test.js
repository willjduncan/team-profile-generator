const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern("Phyllis", 123, "phyllis@gmail.com", "Harvard");
  
    expect(intern.name).toBe('Phyllis');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name from the getName method", () => {
    const intern = new Intern("Phyllis", 123, "phyllis@gmail.com", "Harvard");
  
    expect(intern.getName()).toEqual(expect.stringContaining("Phyllis"));

});

test("gets intern's id from the getId method", () => {
    const intern = new Intern("Phyllis", 123, "phyllis@gmail.com", "Harvard");
  
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("gets intern's school from the getSchool method", () => {
    const intern = new Intern("Phyllis", 123, "phyllis@gmail.com", "Harvard");
  
    expect(intern.getSchool()).toEqual(expect.stringContaining("Harvard"));
});

test("gets intern's email from the getEmail method", () => {
    const intern = new Intern("Phyllis", 123, "phyllis@gmail.com", "Harvard");
  
    expect(intern.getEmail()).toEqual(expect.stringContaining("phyllis@gmail.com"));
});

test("gets 'Intern' from the getRole method", () => {
    const intern = new Intern("Phyllis", 123, "phyllis@gmail.com", "Harvard");
  
    expect(intern.getRole()).toEqual("Intern");

});