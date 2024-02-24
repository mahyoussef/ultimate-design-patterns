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

- **Observer**: [UML diagram](https://mermaid.live/view#pako:eNqdk01ugzAQha9ieUVaygFYdJMQKZUaUEjVRYgqxzapVbCRfypFUXKLHqan6hWKDYK0gS66AcR7b-abkX2EWBAKQwgALpBSM4b2EpUZByDmBeP0Eck3qqsCYQqC4B5E75Tr9aGiw5abIACp2Sks2Y7KcU8iBTFYjxviPG_yfTXX_0Hs5owTqw2HQ3AHVJdRX58fYEWxkOTcofsXRTfb83idqqF0RVrizXbcLiyzMzv6cettT-gNUk3Gk4b_P4sIacfw2vffZjeG556TZt9dx9qyjJ5fklU8e5qu_SEtns-j1ZUSJ9HyJYnTxXoRL1O_KdvT285caJYfPKUl4_u2cctr18xRSe2SG_2XWEmGncpN2Z5AN6KdweolVQrtf-St3h2r4QYX8jDe1CgtyrF4r16nAfRhLZWIkfoaHh0w1K-0pBkM609Cc2QKncGMn2orMlqkB45hqKWhPjQVQZq217b5efoG_VldVg) - [implementation](observer/bundle.ts) - [playground](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/observer/bundle.ts)
