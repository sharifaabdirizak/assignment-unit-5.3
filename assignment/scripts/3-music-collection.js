console.log('***** Music Collection *****')
//Create a variable `collection` that starts as an empty array.
let collection = [];
console.log('This is my record collection:', collection);

//Add a function named `addToCollection`. This function should:
// Take in the album's `title`, `artist`, `yearPublished` as input parameters
// Create a new object having the above properties
// Add the new object to the end of the `collection` array
// Return the newly created object
function addToCollection(title, artist, yearPublished) {
    let album = { 
        albumTitle: title,
        albumArtist: artist,
        albumYear: yearPublished,
    }
    collection.push(album);
    return album;
}

// Test the `addToCollection` function:
  // Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  // Console.log each album as added using the returned value.
// After all are added, console.log the `collection` array.

console.log ('Add Exodus by Bob Marley and the Wailers to collection:' , addToCollection('Exodus', 'Bob Marley and the Wailers' , 1977));
console.log( 'Add 8701 by usher to collection:' , addToCollection('8701', 'Usher' , 2001));
console.log( 'Add Born to Die by Lana Del Rey:' , addToCollection( 'Born to Die' , 'Lana Del Rey' , 2012));
console.log( 'Add Janet by Janet Jackson:' , addToCollection('Janet', 'Janet Jackson', 1993));
console.log( 'Add Don Omar Presents MTO²: New Generation by Don Omar:' , addToCollection('Don Omar Presents MTO²: New Generation' , 'Don Omar' , 2012));
console.log(' Add Distant Relatives by Damian Marley and Nas:' , addToCollection('Distant Relatives' , 'Damian Marley and Nas', 2010));

console.log('This is my record collection:' , collection);


// Add a function named `showCollection`. This function should:
  // Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  // Console.log the number of items in the array.
  //Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.


  function showCollection(params) {
    console.log('Number of albums in collection,', (params.length));
        for(let album of params){
    console.log(`${album.albumTitle} by ${album.albumArtist}, published in ${album.albumYear}`);
    }
    }showCollection(collection);


        
// Test the `showCollection` function.

// Add a function named `findByArtist`. This function should:
  //Take in `artist` (a string) parameter
  //Create an array to hold any results, empty to start
  //Loop through the `collection` and add any objects with a matching artist to the array.
  //Return the array with the matching results. If no results are found, return an empty array.

// Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

function findByArtist(artist){
      let found = [];
         for (let i = 0; i < collection.length; i++) {
            if (collection[i].albumArtist === artist) {
                found.push(collection[i]); 
            } else 
        return found;
    }
    }
console.log('Find 8701 album from collection:' , findByArtist('Usher'));
console.log('Return an empty array:' , findByArtist('Train'));

