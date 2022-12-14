import React from "react";

// Create the context
const ContextMenu = React.createContext();

// Define the context menu options as an object
const contextMenuOptions = {
  option1: () => console.log("Option 1 selected"),
  option2: () => console.log("Option 2 selected"),
  option3: () => console.log("Option 3 selected"),
};

// Define a component that will render the context menu
const ContextMenuComponent = () => (
  <ContextMenu.Consumer>
    {(options) => (
      <div className="context-menu">
        {Object.keys(options).map((key) => (
          <button onClick={options[key]} key={key}>
            {key}
          </button>
        ))}
      </div>
    )}
  </ContextMenu.Consumer>
);

// Define a component that will wrap the context menu provider
export const WrappedComponent = () => (
  <ContextMenu.Provider value={contextMenuOptions}>
    <ContextMenuComponent />
  </ContextMenu.Provider>
);
