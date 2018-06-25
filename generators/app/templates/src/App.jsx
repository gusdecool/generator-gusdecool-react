// @flow
import * as React from 'react';

type Props = {
    // @TODO: list of props
}

type State = {
    // @TODO: list of states
}

class App extends React.Component<Props, State> {

    //---------------------------------------------------------------------------------------------
    // Static properties
    //---------------------------------------------------------------------------------------------

    //---------------------------------------------------------------------------------------------
    // Instance properties
    //---------------------------------------------------------------------------------------------

    props: Props;
    state: State;

    //---------------------------------------------------------------------------------------------
    // React methods
    //---------------------------------------------------------------------------------------------

    /**
     * @param {Props} props
     */
    constructor(props: Props) {
        super(props);
    }

    render(): React.Element<'div'> {
        return (
            <div>Successfully installed React</div>
        );
    }
}

export default App;
