# dbc-react-querystring

## FilterGuide
The FilterGuide component shows a list of words that can be added to a query. 

### API
The component takes an array of elements and a callback function as properties

```
// elements is an array of query objects with a value and type as minimum
let elements = [
    {
      value: 'harry',
      type: 'text'
    },
    {
      value: 'potter',
      type: 'text'
    },
  ];
  
  // The select callback is called when a user clicks on a filter element
  <FilterGuide 
    elements={elements} 
    select={callback} 
  />
```

## TokenSearchField
The TokenSearchField component converts the query to a row of buttons, that can be removed by the user

### API
The component takes an array of elements, a callback function for removing elements and an optional callback function for change events


```
// elements is an array of query objects with a value and type as minimum
let elements = [
    {
      value: 'harry',
      type: 'text'
    },
    {
      value: 'potter',
      type: 'text'
    },
  ];
  
  // The remove callback is called when a user clicks on a filter element
  <TokenSearchField 
    query={elements} 
    remove={callback} 
    change={callback /*optional callback that can be used fx. by an autocomplete component*/}
  />
``

## how to install
`npm install`

# Test
Start the testrunner with
`npm test:watch`

To only run tests once
`npm test`

# Eksample
See a running example in the examples folder
[index.html](examples/index.html)
