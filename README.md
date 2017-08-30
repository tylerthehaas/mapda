# Mapda v2.0.0

## Installation

Using npm:

```
$ npm install --save mapda
```

## Motivation

Historically JavaScript has only had objects but no dictionaries or maps. This has resulted in objects doing the heavy lifting for both the data structure to store data as well as for dictionaries. There are a few problems with this detailed by Dr. Axel Rauschmayer in [this blogpost](http://2ality.com/2012/01/objects-as-maps.html). As of ES2015 we now have Maps to address some of these issues. The major problem with Maps as they were implemented was that they are difficult to work with JSON data and they do not have nearly enough methods to make it worth the trouble. This package alleviates those problems by having a method to convert to and from json and JavaScript Objects as well as providing map, filter and reduce functions. For more behind the motivation of this package and why you should use it see the [blogpost I wrote]() on the overuse of Objects.

## Usage

### jsonToMap

converts valid json to a new Map

```
const json = JSON.stringify({a: 'maps', b: 'are', c: 'awesome!'});
jsonToMap(json); // Map(3) {"a" => "maps", "b" => "are", "c" => "awesome!"}
```

### mapToJson

converts a Map containing keys that are strings to valid json

```
mapToJson(new Map([['a', 'maps'], ['b', 'are'], ['c', 'awesome!']])); // '{"a": "maps", "b": "are", "c": "awesome!"}'
```

### mapToObject

converts a Map containing keys that are strings to an object

```
mapToObject(new Map([['a', 'maps'], ['b', 'are'], ['c', 'awesome!']])); // {a: 'maps', b: 'are', c: 'awesome!'}
```

### objectToMap

converts an object to a Map.

```
objectToMap({a: 'maps', b: 'are', c: 'awesome!'}); // Map(3) {"a" => "maps", "b" => "are", "c" => "awesome!"}
```

### map

Takes a callback function and a Map and returns a new Map. Follows same pattern as JavaScript's Array.prototype.map method.

Callback arguments

* value - the value in the Map's key/value pair 
* key - the key in the Map's key/value pair

```
const myMap = new Map([['a', 'maps'], ['b', 'are'], ['c', 'awesome!']]);

map((value, key) => {
  return value = 'hi';
}, myMap) // Map(3) {"a" => "hi", "b" => "hi", "c" => "hi"}
```

### filter

Takes a predicate function and a Map and returns a new Map containing the key/value pairs that pass the predicate function. Follows the same pattern as JavaScript's Array.prototype.filter method.

Predicate arguments:
* value - the value in the Map's key/value pair 
* key - the key in the Map's key/value pair

```
const myMap = new Map([['a', 'maps'], ['b', 'are'], ['c', 'awesome!']]);

filter((value, key) => {
  return key === 'b'
}, myMap) // Map(1) {"b" => "hi"}
```

### reduce

Takes a callback function, an initial value and a Map and returns an accumulator. Follows the same pattern as JavaScript's Array.prototype.reduce method.

Callback arguments:
* accumulator - value to be built up as the Map's key/value pairs are iterated over.
* value - the value in the Map's key/value pair 
* key - the key in the Map's key/value pair

```
const myMap = new Map([ [ 'foo', 5 ], [ 'bar', 3 ], [ 'baz', 10 ] ]);

reduce((a, v) => (a += v), 5, myMap); // 23
```