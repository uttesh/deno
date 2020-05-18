# Deno samples
<p align="center">
<img src="https://denolib.github.io/high-res-deno-logo/deno_hr_circle.png" alt="logo" style="margin-left:20%" width="300"/>
</p>

Samples on the Deno.

Deno is a JavaScript/TypeScript runtime with secure defaults and great developer experience.

It's built on V8, Rust, and Tokio.

<a href="https://deno.land/manual"> Visit official website for more Deno features </a>


## What makes Deno different from NodeJS?
 Deno and node both are developed by Ryan Dahl, there are quite big differences.

 1. Deno does not use the npm packages, yes you read it correctly!. It uses the URL/file modules
 2. No package.json
 3. All the actions are Async and it returns promise by default.
 4. It's secure by default and prompts the permission for the net/file or environment access.
 5. It completely uses the ES6 module and no required().
 6. It supports both JavaScript and TypeScript.


## Install and run HelloWorld

### Windows

run the below commands from the powershell to install deno

*Using Chocolatey (Windows):*
```
choco install deno
```

Run Helloworld.ts
```
> deno run --allow-net helloworld.ts

```
Passing the *--allow-net* flag is required because deno is secure by default.

## Availbale Default Modules/Libraries by default
 
 <a href="https://deno.land/std/">library list</a>

## Typescript

Custom TypeScript Compiler Options (Experimental)
```
deno run -c tsconfig.json helloworld.ts
```

## CRUD-REST sample
Samples on the CRUD operation https://github.com/uttesh/deno/tree/master/crud-rest

