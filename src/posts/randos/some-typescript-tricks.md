---
title: Some Advice & TypeScript Tricks
subtitle: Things that I learned writing a huge nestjs app
written date: 2022-07-12
last modified date: 2022-07-12
published: true
tags: [Tutorials]
---

# An Unsolicited Advice

For the past few weeks I've been writing a huge app for personal use. With it comes a freedom of I wantcan do whatever I wan leading into being able to try new things almost on a daily basis. If my project's own deadline got delayed because of this new things the only person will be affected by it is me. Therefore, if somebody wants to learn as fast as they can without a fear of rejection, I will recommend to make a personal project.

Then the next question would be, what should I make for my personal project? Well, I don't know, I had a hard time thinking about it too. But what I can advise for someone to find it is to take what is fascinating them now then make something about it.

Currently fascinated with Harry Potter? Then make a Harry Potter fan game, Fascinated about making a garden? Then make an app that helps you manage your garden. And since we're talking about TypeScript here, then make a React Based UI. As for the specifics, then I leave all of that to you.

Here are some of the nice tricks I've learned

## Creating DTOs

One of the advantages of TypeScript versus other programming languages is in it's ability to generate types based from other types through its [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) One particular utility type is very useful if you want to create DTOs. Consider the Following

```typescript
// This is a TypeORM entity
@Entity
export class Home {
  @PrimaryGeneratedId('uuid')
  uuid: string

  @Column()
  address: string

  @Column()
  owner: string
}

export type HomeDTO = Partial<Omit<Home, 'uuid'>>; 
```

This creates a new type, HomeDTO without the uuid property and all others not required. Perfect for a DTO type.


## Shoudn't This be the Default Class Contructor in TypeScript?

Consider the following

```typescript
@Entity
export class Home {
  @PrimaryGeneratedId('uuid')
  uuid: string

  @Column()
  address: string

  @Column()
  owner: string
}

const home = new Home();
home.address = "Somewhere";
home.owner = "Someone";
homeRepository.save(home);
```

And imagine you'll have tens or hundreds of those properties. Woudn't that be quite tedious to map? Of course that is where an [Automapper](https://github.com/nartc/mapper) comes in but if you want to do it simple then you can consider this

```typescript
@Entity
export class Home {

  constructor(init?: Partial<Home>) {
    Object.assign(this, init);
  }

  /// ... other properties
}

homeRepository.save(new Home({
  address: "Somewhere",
  owner: "Someone"
}));
```

This uses the qualities of the TypeScript [Partial Utility Type](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype), Read the link for more info.

Combining it with the previous tip

```typescript
homeRepository.save(new Home({
  ...homeDto
}));
```

Of course, Most of the time using an Automapper makes more sense, use this if

 - You only use this once, on a small and simple project for example
 - If you want least dependencies.

## Lodash 101

Most of the information here I've learned from [here](https://medium.com/bootstart/why-using-chain-is-a-mistake-9bc1f80d51ba) and [here!](https://stackoverflow.com/questions/56699850/lodash-flow-and-typescript), credits to these awesome guys!

Most of us have probably used lodash many times when we are developing applications. However, when going on the lodash documentation, it doesn't really gives us a good way to use it. I don't know if I am stupid or what but this is how I used lodash for the longest time

```typescript
const filteredCollection = _.filter(collection, (c) => c.isFiltered)
const sortedCollection = _.sortBy(filteredCollection, ['sortkey'])
const mappedCollection = /* However you want to map it */
```

Coming from the world of LINQ I find the above really unpleasant (and importing the whole lodash library is not really a very good thing to do). Consider the following code I copy pasted on [Wikipedia](https://en.wikipedia.org/wiki/Fluent_interface#C#)

```C#
var translations = new Dictionary<string, string>
{
    {"cat", "chat"},
    {"dog", "chien"},
    {"fish", "poisson"},
    {"bird", "oiseau"}
};

// Find translations for English words containing the letter "a",
// sorted by length and displayed in uppercase
IEnumerable<string> query = translations
	.Where(t => t.Key.Contains("a"))
	.OrderBy(t => t.Value.Length)
	.Select(t => t.Value.ToUpper());
```

Notice that the translations object methods also returns itself that lets it to be manipulated by chaining methods together (This is called a [Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface)). The same coudn't be done on Lodash (on my example at least)

There is a way to write lodash to make it a little bit more similar to LinQ

```Typescript
// Needed imports
import flow from 'lodash/fp/flow'
import filter from 'lodash/fp/filter'
import sortBy from 'lodash/fp/sortBy'
import map from 'lodash/fp/map'

// Lodash code
// For more information read the links from above. 
flow(
  filter<Collection>((c) => c.isFiltered),
  sortBy(['sortkey'])
  map(/* however you want to map it */)
)(collection)
```

This one utilizes the lodash function [flow](https://lodash.com/docs/4.17.15#flow) and Lodash fp's auto-currying.

What flow basically does is it creates a function that basically chains the functoins given to it as argument, and once called executes the given functions from top to bottom, automatically currying the iteratee as first argument of the filter function, and the result of the filter function is curried to sortBy and so on.

One thing you might notice weird in the example I provided is the usage of a generic in the filter function. This is done because TypeScript/JavaScript actually an interepreted language. Doesn't actually know what is the type of the argument being curried into it. (Once you view it on intellisense, it will say the type of this is unknown, and you won't get proper recommendations on the sortBy and map functions). Providing the type corrects this. People might argue it looks ugly though. 

There are others way to better use lodash than my first example, like using the `_.chain` for instance, but I don't want to go in depth in this article, and the things I would like to mention is already mentioned in [here](https://medium.com/bootstart/why-using-chain-is-a-mistake-9bc1f80d51ba)

I might write a full blown article on how to use lodash properly in the future.