export const overloadExampleBefore = `// Tag Entities
[
    {
        _id:"tag1",
        name: "tag1",
        books:[123456789]
    },
    {
        _id:"tag2",
        name: "tag2",
        books:[123456789,34567890]
    },
    {
        _id:"tag3",
        name: "tag3",
        books:[34567890]
    }
]

// Book Entities
[
    {
        _id: 123456789,
        title: "MongoDB: The Definitive Guide",
        author: [ "Kristina Chodorow", "Mike Dirolf" ],
        published_date: ISODate("2010-09-24"),
        pages: 216,
        language: "English",
        tags:["tag1","tag2"],
        publisher_id: "oreilly"
    },
    {
        _id: 234567890,
        title: "50 Tips and Tricks for MongoDB Developer",
        author: "Kristina Chodorow",
        published_date: ISODate("2011-05-06"),
        pages: 68,
        language: "English",
        tags:["tag2","tag3"],
        publisher_id: "oreilly"
    }
]`;

export const overloadExampleAfter = `// Tag Entities
[
    {
        _id:"tag1",
        name: "tag1",
    },
    {
        _id:"tag2",
        name: "tag2",
    },
    {
        _id:"tag3",
        name: "tag3",
    }
]

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
]

// Storeitems Entities
[
    {
        _id:"12351uhbrjnweqke"
        tagId:"tag1",
        bookId:"123456789"
    },
    {
        _id:"adfa1uhbrjnweqke"
        tagId:"tag2",
        bookId:"123456789"
    },
    {
        _id:"12we1uhbrjnweqke"
        tagId:"tag2",
        bookId:"123456790"
    },
    {
        _id:"asfd1uhbrjnweqke"
        tagId:"tag3",
        bookId:"123456790"
    }
]`;
