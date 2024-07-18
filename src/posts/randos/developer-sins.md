---
title: Developer Sins
subtitle: Watch out for these sins that you might commit on your life as a developer
written date: 2024-07-18
last modified date: 2021-04-25
published: true
---
# A bit of a Background

I've been a developer for more than 5 years now, and in those five years I've seen myself grow, I've seen other people grow, and currently I'm pursuing a position as a lead and eventually an architect in a relatively big consulting firm. And throughout my life, I've commited a few sins and seen a few sins being made by my colleauges that I want to talk about here. 

I've also noticed that these sins are usually commited by devs of a particular level. 

## Junior Level Sins

### Using the wrong library function

Okay, this might even go below a junior level sin

### Not using libraries at all

Some junior level developers have this feeling where if you're going to have a certain functionality in your code, let's say id generation, and it's going to be only used once in your app. Don't use a library but just create your own way to generate an ID.

Well there may be some truth to this, and it may have some benefits but there's so many things that can go wrong if you pursue this route.

1. These library writers have put more thought on how to do the thing you want to do than you did and using those libraries might remove those pains you're going to have
2. As long as the library is being maintained, chances are they can cover the security front of the code more properly than you ever will.
3. That's less code the team has to maintain

Okay, you might argue that well, if it's just a single function, using a library for it will increase our bundle/artifact sizes. Well that's true, but we should also remember that this is already a solved problem.

- Treeshaking exist in JavaScript/TypeScript, among many tools to reduce build size.
- Optimized compiling exist in compiled languages. Use all the libraries you want but when you compile, only related code will get included in the build.

Now some might say that it's our development environment might get bloated. We might end up with a huge node_modules folder. But I say, who cares if we have a bloated node_modules folder, it's there to make our lives easier. As long as we do out jobs correctly we're not supposed to worry about it's size. We should worry about how big our bundles will be.

### Not thinking enough by tradeoffs



### Making the wrong decisions

### Not making the correct career decisions

## Mid Level Sins

### Treating code like it's art (abstract art)

### Reviewing other people's code without proper decourum

## Senior / Lead Level Sins

### Being too loose towards devs below them

### Abstractions like there's no tomorrow

### Too few abstractions

### Not fostering an environment where everyone will be motivated to improve
