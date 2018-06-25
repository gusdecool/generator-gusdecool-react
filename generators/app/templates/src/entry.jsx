// @flow
import * as React from 'react';
import ReactDom from 'react-dom';
import App from './App';

/**
 * @property {Element} element
 */
class Entry {

    element: HTMLElement;
    observer: MutationObserver;

    observerConfig = {
        childList: false,
        attributes: true,
        characterData: false,
        subtree: false,
        attributeOldValue: false,
        characterDataOldValue: false,
        attributeFilter: [
            // @TODO: list of watched html attributes
        ]
    };

    /**
     * @param {string} elementId element id name
     */
    constructor(elementId: string) {
        const element: HTMLElement | null = document.getElementById(elementId);

        if (element === null) {
            throw new Error(`Element id "${elementId}" not found`);
        }

        this.element = element;
    }

    render(): React.ElementRef<typeof App> {
        return ReactDom.render(
            <App />,
            this.element
        );
    }

    /**
     * @param {function} callback callback when observed triggered
     */
    observe(callback: () => void) {
        this.observer = new MutationObserver(callback);
        this.observer.observe(this.element, this.observerConfig);
    }
}

const entry = new Entry('<%= appName %>');
let DepotMap = entry.render();

entry.observe(() => {
    DepotMap = entry.render();
});

export default DepotMap;
export {DepotMap};
