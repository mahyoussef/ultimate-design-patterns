# TypeScript Implementation

This is a TypeScript implementation of the designs patterns presented in the [Ultimate Design Patterns](https://www.udemy.com/course/ultimate-design-patterns/?referralCode=C4486750B8FA2ABC3F46) course, using common conventions and recommended practices in TypeScript.

## File Structure

Each directory represents a design pattern. The entry point in each directory is `index.ts`.

The file `bundle.ts` represents the bundle of all files in the directory, for convenience, to have a general overview in a single file and to allow to easily copy and run the code (e.g. in playgrounds).

## Running the Code

### Online Playground

The code in `bundle.ts` can run directly in [LiveCodes](https://livecodes.io/) playground, or other playgrounds that run TypeScript.

See the [List of Patterns](#list-of-patterns) below for links to playgrounds for each pattern.

### Locally

Please ensure you have [Node.js](https://nodejs.org/en/) installed.

You can then run the `index.ts` or `bundle.ts` files for each directory, using something like [`ts-node`](https://www.npmjs.com/package/ts-node).

Example:

```bash
npx ts-node ./typescript/observer/index.ts
```

Alternatively, you can run the code using other TypeScript runtimes like Deno or Bun.

And of course, you may first compile TypeScript code to JavaScript as usual using [tsc cli](https://www.npmjs.com/package/typescript) or other tools.

## List of Patterns

- **Observer**: [UML diagram](https://mermaid.live/view#pako:eNqdVEtOwzAUvIrlVQqhB-iCBaVFIJFULYgFQZUbvxaLxrb8AVUIbsFhOBVXwHFCUlJHSGziyDPz3syz7FecCwp4hBHKt0Trc0Y2ihQZRyjlW8bhmqgnMHJLckDD4SmaPAM3NzsJYcrRcIgWdqVzxVag-jkzJajNTT8hXa8rfVvN978SqynjNIiNrTaiCEKLRyYl45uxKCThu4yHO4_QCdKNUn99fqA55ELR9yZ3vFf6_uG9v46sIvoiddz7h366KAN7so_eTz1uHUZBV4N-peX_1xJKE3ipk0T1-iffh4n890-uO9tUAnfHFGmj3DLoHxcXhq13rXG9n6dRl_pm3-mSyd1yNk_Pb8c3cQhLp9PJ_AC5Ss-W6WySXCYXcVWz7Vu6r7xEv7rW8_FWSQHluVZ4B5SK5R7ltqhvTIMeow2YxKmjweH-rBRWgJ9SOeGyYAFak02nYY164XVFiGqjP5cm7LRFO2b2gW5-b6i5qOHCe3Cn8i8kNNrOXQ7XPyB1ugTwgxg4xi5hQRh1D-SrnzQ2j1BAhkful8Ka2K3JcMbfHJVYIxY7nuORURZibCUlBuoHtdp8-wYNTeuw) - [implementation](observer/bundle.ts) - [playground](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/observer/bundle.ts)
