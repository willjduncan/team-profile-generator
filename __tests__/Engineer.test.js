const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer("Phil", 123, "phil@gmail.com", "github.com/phil");
  
    expect(engineer.name).toBe("Phil", 123, "phil@gmail.com", "github.com/phil");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name from the getName method", () => {
    const engineer = new Engineer("Phil", 123, "phil@gmail.com", "github.com/phil");
  
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));

});

test("gets engineer's id from the getId method", () => {
    const engineer = new Engineer("Phil", 123, "phil@gmail.com", "github.com/phil");
  
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("gets engineer's github from the getGithub method", () => {
    const engineer = new Engineer("Phil", 123, "phil@gmail.com", "github.com/phil");
  
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("gets engineer's email from the getEmail method", () => {
    const engineer = new Engineer("Phil", 123, "phil@gmail.com", "github.com/phil");
  
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets 'Engineer' from the getRole method", () => {
    const engineer = new Engineer("Phil", 123, "phil@gmail.com", "github.com/phil");
  
    expect(engineer.getRole()).toEqual("Engineer");

});