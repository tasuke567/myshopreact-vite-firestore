// hello_algolia.js
import algoliasearch from "algoliasearch";

// Connect and authenticate with your Algolia app
const client = algoliasearch("IQ3WCXN8EY", "7105b4d5717148af2f760824c94b9dcf");

// Create a new index and add a record
const index = client.initIndex("test_index");
const record = { objectID: 1, name: "test_record" };
index.saveObject(record).wait();

// Search the index and print the results
index.search("test_record").then(({ hits }) => console.log(hits[0]));
