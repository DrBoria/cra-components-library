### Modal:

```jsx
import Modal from 'components/Modal';

const [isOpen, setIsOpen] = React.useState(false);

<>
  <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
  <Modal open={isOpen} handleClose={() => setIsOpen(!isOpen)}>
    <div>
      <h1>Some child content</h1>
      <span>Child context description</span>
    </div>
  </Modal>
</>;
```