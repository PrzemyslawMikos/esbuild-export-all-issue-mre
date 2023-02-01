import { loadModule, testExport } from 'p2';

const start = async (): Promise<void> => {
    /**
     * Scenario 1
     * Do not exist when `export * from 'p1';` in p2 `index.ts`
     * */ 
    console.log('Imported value:', testExport);

    /**
     * Scenario 2
     * Works for `export * from 'p1';` in p2
     * In this case `loadModule` is importing package dynamically p1 and export is available because it's awaited
     */
    const module = await loadModule();

    /**
     * Exist when `export * from 'p1';` in p2 `index.ts` - loaded asynchronously by `loadModule` above
     */
    // console.log('Imported value:', testExport);

    /**
     * Proof that dynamic import works
     */
    // module.callback();
};

export const started = start();
