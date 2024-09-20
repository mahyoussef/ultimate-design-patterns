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

### SOLID Principles

- [**SOLID principles implementation**](solid-principles)

### Behavioral Design Patterns

- **Observer**: [UML diagram](patterns/observer/uml-diagram.md) - [implementation](patterns/observer/bundle.ts) - [playground](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/observer/bundle.ts) - [exercise](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/observer/exercise/bundle.ts)

- **Strategy**: [UML diagram](patterns/strategy/uml-diagram.md) - [implementation](patterns/strategy/bundle.ts) - [playground](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/strategy/bundle.ts) - [exercise](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/strategy/exercise/bundle.ts)

- **Template**: [UML diagram](patterns/template/uml-diagram.md) - [implementation](patterns/template/bundle.ts) - [playground](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/template/bundle.ts) - [exercise](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/template/exercise/bundle.ts)

- **Chain of Responsibility**: [implementation](patterns/chain-of-responsibility/bundle.ts)

- **Memento**: [implementation](patterns/memento/bundle.ts)

- **Visitor**: [implementation](patterns/visitor/bundle.ts)

- **Iterator**: [implementation](patterns/iterator/bundle.ts)

- **State**: [implementation](patterns/state/bundle.ts)

- **Mediator**: [implementation](patterns/mediator/bundle.ts)

- **Command**: [implementation](patterns/command/bundle.ts)

### Structural Design Patterns

- **Adapter**: [implementation](patterns/adapter/bundle.ts)

- **Bridge**: [implementation](patterns/bridge/bundle.ts)

- **Composite**: [implementation](patterns/composite/bundle.ts)

- **Decorator**: [implementation](patterns/decorator/bundle.ts)

- **Facade**: [implementation](patterns/facade/bundle.ts)

- **Proxy**: [implementation](patterns/proxy/bundle.ts)

- **FlyWeight**: [implementation](patterns/flyweight/bundle.ts)

### Creational Design Patterns

- **Builder**: [implementation](patterns/builder/bundle.ts)

- **Singleton**: [implementation](patterns/singleton/bundle.ts)

- **Prototype**: [implementation](patterns/prototype/bundle.ts)

- **Factory**: [UML diagram](patterns/factory/uml-diagram.md) - [implementation](patterns/factory/bundle.ts) - [playground](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/factory/bundle.ts) - [exercise](https://livecodes.io/?console&x=https://github.com/mahyoussef/ultimate-design-patterns/blob/main/typescript/factory/exercise/bundle.ts)
