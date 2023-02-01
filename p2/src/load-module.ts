import { TestModule } from 'p1';

export const loadModule = (ctx?: { module?: Promise<TestModule> }): Promise<TestModule> => {
    if (!ctx) {
        ctx = {};
    }
    if (!ctx.module) {
        ctx.module = import('./init-module').then(({ initModule }) => initModule())
    }
    return ctx.module;
}