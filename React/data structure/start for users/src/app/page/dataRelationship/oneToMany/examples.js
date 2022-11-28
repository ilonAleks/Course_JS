export const adressesExampleNormalized = `// User Entity
{
    _id: "joe",
    name: "Joe Bookreader"
}
// Address Entities
[
    {
        parent_id: "joe", // reference to parent document
        street: "123 Fake Street",
        city: "Faketon",
        state: "MA",
        zip: "12345"
    },
    {
        parent_id: "joe",
        street: "1 Some Other Street",
        city: "Boston",
        state: "MA",
        zip: "12345"
    }
]`;
export const adressesExampleDenormalized = `// User 
{
    _id: "joe",
    name: "Joe Bookreader",
    addresses: [
        {
            street: "123 Fake Street",
            city: "Faketon",
            state: "MA",
            zip: "12345"
        },
        {
            street: "1 Some Other Street",
            city: "Boston",
            state: "MA",
            zip: "12345"
        }
    ]
}`;

export const publisherExampleDenormalized = `//Book Entities
[
    {
        title: "MongoDB: The Definitive Guide",
        author: [ "Kristina Chodorow", "Mike Dirolf" ],
        published_date: ISODate("2010-09-24"),
        pages: 216,
        language: "English",
        publisher: {
            name: "O'Reilly Media",
            founded: 1980,
            location: "CA"
        }
    },
    {
        title: "50 Tips and Tricks for MongoDB Developer",
        author: "Kristina Chodorow",
        published_date: ISODate("2011-05-06"),
        pages: 68,
        language: "English",
        publisher: {
            name: "O'Reilly Media",
            founded: 1980,
            location: "CA"
        }
    }
]`;
export const publisherExampleNormalizedByPublisher = `// Publisher Entity
{
    name: "O'Reilly Media",
    founded: 1980,
    location: "CA",
    books: [123456789, 234567890, ...]
}

// Book Entities
[
    {
        _id: 123456789,
        title: "MongoDB: The Definitive Guide",
        author: [ "Kristina Chodorow", "Mike Dirolf" ],
        published_date: ISODate("2010-09-24"),
        pages: 216,
        language: "English"
    },
    {
        _id: 234567890,
        title: "50 Tips and Tricks for MongoDB Developer",
        author: "Kristina Chodorow",
        published_date: ISODate("2011-05-06"),
        pages: 68,
        language: "English"
    }
]`;

export const publisherExampleNormalizedByBook = `// Publisher Entity
{
    _id: "oreilly",
    name: "O'Reilly Media",
    founded: 1980,
    location: "CA"
}

// Book Entities
[
    {
        _id: 123456789,
        title: "MongoDB: The Definitive Guide",
        author: [ "Kristina Chodorow", "Mike Dirolf" ],
        published_date: ISODate("2010-09-24"),
        pages: 216,
        language: "English",
        publisher_id: "oreilly"
    },
    {
        _id: 234567890,
        title: "50 Tips and Tricks for MongoDB Developer",
        author: "Kristina Chodorow",
        published_date: ISODate("2011-05-06"),
        pages: 68,
        language: "English",
        publisher_id: "oreilly"
    }
]`;
