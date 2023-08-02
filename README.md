# s-dnm

`s-dnm` is a React component library that provides draggable functionality for managing lists. It includes two main components: `DraggableContainer` and `DraggableContainer.Managed`.

## Installation

You can install `s-dnm` using npm:

```shell
npm install s-dnm
```

or yarn:

```shell
yarn add s-dnm
```

## Quick Examples

You can set up the reordering process according to your own logic, or you can easily sort by using our managed component.

Here are full examples:

### DraggableContainer Full Example

```jsx
import React, { useState } from 'react';
import DraggableContainer, { move } from 's-dnm';
import "s-dnm/dist/style.css"

function MyComponent() {
  const [list, setList] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleOrderChange = (oldIndex, newIndex) => {
    setList(move(list, oldIndex, newIndex));
  };

  return (
    <DraggableContainer onOrderChange={handleOrderChange}>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </DraggableContainer>
  );
}
```

### DraggableContainer.Managed Full Example

```jsx
import React, { useState } from 'react';
import DraggableContainer from 's-dnm';
import "s-dnm/dist/style.css"

function MyManagedComponent() {
  const [list, setList] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <DraggableContainer.Managed list={list} setList={setList}>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </DraggableContainer.Managed>
  );
}
```

## API

### DraggableContainer

`DraggableContainer` is a wrapper component that allows you to create a draggable list. It takes the following prop:

- `onOrderChange`: A callback function that will be triggered when the order of items in the list changes. It receives the old index and the new index of the item as arguments.

```jsx
import React from 'react';
import DraggableContainer from 's-dnm';

function MyComponent() {
  const handleOrderChange = (oldIndex, newIndex) => {
    // Handle the change in order here
  };

  return (
    <DraggableContainer onOrderChange={handleOrderChange}>
      {/* Your list items here */}
    </DraggableContainer>
  );
}
```

### DraggableContainer.Managed

`DraggableContainer.Managed` is a component that allows you to manage a list with state. It takes the following props:

`list`: An array of items representing the list.
`setList`: A state setter function to update the list.

```jsx
import React, { useState } from 'react';
import DraggableContainer from 's-dnm';

function MyManagedComponent() {
  const [list, setList] = useState([/* Your initial list items here */]);

  return (
    <DraggableContainer.Managed list={list} setList={setList}>
      {/* Your draggable list items here */}
    </DraggableContainer.Managed>
  );
}
```

### Utilities

`s-dnm` also provides a utility function that you can use to move items within a list.

#### move (function)

The `move` function takes an array, the current index of the item to move, and the target index where the item should be moved to. It returns a new array with the item moved to the desired position.

```js
import { move } from 's-dnm';

const list = [/* Your list items here */];
const movedList = move(list, currentIndex, targetIndex);
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
