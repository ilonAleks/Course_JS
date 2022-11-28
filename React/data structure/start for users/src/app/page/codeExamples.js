export const example1Part1 = `// user Entity
{
    _id: "joe",
    name: "Joe Bookreader",
    address: {
        street: "123 Fake Street",
        city: "Faketon",
        state: "MA",
        zip: "12345"
    }
}
`;
export const example1Part2 = `// User Entity
{
    _id: "joe",
    name: "Joe Bookreader"
}
// User Address Entity
{
    user_id: "joe", // reference to parent document
    street: "123 Fake Street",
    city: "Faketon",
    state: "MA",
    zip: "12345"
}`;
