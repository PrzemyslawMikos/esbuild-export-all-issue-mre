# ESBuild `export * from 'x';` issue - minimal reproducible example

## How to test

### Scenario 1 - Simple `export * from 'x';`

1. Run `yarn install` in package main directory
2. Run `yarn test` script
3. Notice that `Imported vlaue` in console is `undefined`
4. Open `index.ts` in `p2` package
5. Comment `export * from 'p1';` line
6. Uncomment `export { testExport, TestModule, TestComponent } from 'p1';` line
7. Run `yarn test` script
8. Notice that `Imported vlaue` was properly imported with value of `testExportValue`

## Scenario 2 - Awaiting on module import - might help with investigation

1. Run `yarn install` in package main directory
2. Open `index.ts` in `p3` package
4. Uncomment code related to `Scenario 2`
5. Run `yarn test` script
6. Notice that first console returned `undefined` but after awaited module initialization (dynamic import) imported value is available and properly displayed `testExportValue`
