---
layout: post
title: "Modularising GraphQL for scale"
date: 2019-11-24 12:00:00 +0100
categories: [dev]
permalink: /modularising-graphql-for-scale/
---
When fiddling around with GraphQL projects, I've frequently found it difficult to know where things should go. Just like naming variables, naming and placing files is hard. The simplest method here is to bundle everything in to one file, but that quickly gets out of hand.

Separate files means separate logical groups of relevant data. There are plenty of ways to easily view directory trees, but it's not so easy to bundle all of the mental state of a 3,000 line file in to your head. What if our entire GraphQL server could be viewed neatly, like this:

![Example GraphQL tree]({{ site.baseurl }}/assets/images/graphql-example-tree.png)

On the left here, we see the directory tree for the types in this example GraphQL server. Each type has its own directory with a `schema.graphql` file defining it. For the simple `Date` type, we've only made two files - `schema.graphql` and `resolvers.js`. The files here are really simple:

{% highlight js %}
// schema.graphql
scalar Date
{% endhighlight %}

{% highlight js %}
// resolvers.js
const GraphQLDate = require('graphql-date')

module.exports = GraphQLDate
{% endhighlight %}

While we've separated those in to two files, with the code we'll be writing we could just as well place them in a single file, `Date.js`, in place of the entire `Date` folder:

{% highlight js %}
// Date.js
const GraphQLDate = require('graphql-date')

const schema = `
	scalar Date
`

const resolvers = GraphQLDate

module.exports = {
	schema,
	resolvers
}
{% endhighlight %}

This means that we can keep exceedingly simple types in singular files where we can see the entirety of their functionality in a small number of lines. Larger types like `Message`, though, we can split up as we see fit.

This is perfectly doable, but there's a certain degree of mucking about that's required to get all of these schemas and resolvers in to place. Usually that means back to one massive file that `require`s a hundred others.

For ease of use, a better method of loading and managing GraphQL types, resolvers, and loaders is available as a package at [@jpwilliams/graphql-modular-loader](https://www.npmjs.com/package/@jpwilliams/graphql-modular-loader). An example of its use with [apollographql/apollo-server](https://github.com/apollographql/apollo-server) is as follows:

{% highlight js %}
const { ApolloServer } = require('apollo-server')
const { loader } = require('@jpwilliams/graphql-modular-loader')

const { typeDefs, resolvers } = loader('./types')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({
	port: process.env.PORT || 4000
}).then(({ url }) => {
	console.log(`🚀	Server ready at ${url}`)
})
{% endhighlight %}

But let's slow up a second. If we use that package and separate our entire GraphQL functionality in to individual files, what are a few things we could gain?

1. **Ease of deletion.** Deleting code is a big part of cleaning up. Sometimes that means entire sections of a deprecated API. Here, you'd delete the relevant folder and that's it. Done. Otherwise, you're digging through files hoping nothing secretly relies on what you've done.

2. **Separation of concern.** Building up the state of an application in your mind is a huge part of programming. If you can open a single file and only have to concentrate on that singular part, you're already half way to solving the problem.

3. **"Bookmarked" code.** Searching for the exact part you need of a large file is not a nice experience. Comments and IDEs help with this, but nothing beats having your code organised in to small, relevant files.

This is the aim of [@jpwilliams/graphql-modular-loader](https://www.npmjs.com/package/@jpwilliams/graphql-modular-loader). Personally, it's helped me keep many projects shockingly orderly.

The package supports every aspect of GraphQL that may need to be separated out: schemas, queries, mutations, subscriptions, field resolvers, and loaders. For a full look at the source code and up-to-date documentation, check out the [jpwilliams/graphql-modular-loader](https://github.com/jpwilliams/graphql-modular-loader) GitHub repository.
