`Status` visualizes the reducer state.

```jsx
const [connected, setConnected] = React.useState( true );
const [scheduled, setScheduled] = React.useState( 0 );
const timeout = 2500;
const disconnect = () => {
    setConnected( false );
    setScheduled( timeout );
    setTimeout( () => setConnected( true ), timeout );
}
<>
    <Checkbox checked={connected} label="Connected" unchecked="Disconnected" onClick={disconnect} />
    <Status connected={connected} scheduled={scheduled} />
</>
```