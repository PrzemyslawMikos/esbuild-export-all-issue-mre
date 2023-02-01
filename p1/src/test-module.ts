import { FunctionComponent } from 'react';
import { TestComponent } from './test-component';

export interface TestModule {
    callback: () => void;
    Component: FunctionComponent;
}

export const initTestModule = (): TestModule => ({
    callback: () => {
        console.log('P1 Module callback');
    },
    Component: TestComponent,
});
