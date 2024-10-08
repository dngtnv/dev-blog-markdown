---
public: true
title: This is my react summary for my own
image:
  url: '/img/zenn.dev_.png'
  alt: 'this is random image'
createdAt: '2023-12-28'
updatedAt: '2023-12-28'
author: dngtnv
description: This is my react summary for my own.
slug: my-react-summary
topics:
  - 'react'
  - 'learning'
---

# 1. Introducing React.js

## 1.1 What is React

- A **JavaScript Library** used for building **web user interfaces** - Open source project made by Facebook Team.
- React is all about **Components**.
- Components are just like JS function, they receive any _props_ and then return **React Element** describe what gonna be show up on the screen. Components allows you to spit UI to independent and reusable part and completely separate from each other.

## Closer Look: public/ vs assets/ for Image Storage

- You should use the `public/` folder for any images that should **not be handled by the build process** and that should be **generally available**. Good candidates are images used directly in the `index.html` file or favicons.
- On the other hand, images that are used **inside of components** should typically be stored in the `src/` folder (e.g., in `src/assets/`).

## 1.2 Why use React

- It makes building complex, interactive UIs a breeze (Nó giúp cho việc xây dựng các giao diện người dùng phức tạp trở nên dễ dàng)
- Tái sử dụng các Components.
- Dễ dàng bảo trì và mở rộng.
- React makes building **complex, interactive** and **reactive** user interfaces **simpler**.

# 2. Components

| Built-in Components                                          | Custom Components                                                                 |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Name starts with a **lowercase** character                   | Name starts with a **uppercase** character                                        |
| Only ==valid, officially defined== HTML elements are allowed | ==Defined by you, wrap== built-in or other custom components                      |
| Are ==rendered as DOM nodes== by React                       | React **traverses** the component tree until it has only built-in components left |

# 3. State & Two way binding

## 3.1 State

> [!Tip] React Is Scheduling State Updates
> State updates are **not performed instantly** but as same point in the future (When React has time for it). In most cases, those state updates of course still are executed **almost instantly** => So always use prevState to updating state if it depend on
> `setState((prevState) => !prevState)`

- Update state depends on previous state

```javascript
setState((prevState) => {
	return {...prevState, ... }
})
```

## 3.2 Update Object-State Immutably

- **Objects & Arrays** (which technically are objects) are **reference values** in JavaScript -> You should therefore **not mutate** them directly -> Instead create a **(deep) copy** first to avoid **strange bugs & side effects**.

```js
const updatedUser = { ...user }
updatedUser.name = 'Vu'
return updatedUser
```

## 3.3 Lifting State up

Lift the state up to the **closest ancestor (tổ tiên) component** that has access to all components that need to work with that state.

> [!info] Avoid Intersecting States
> Consider if you really need to create another state

# 4. usePortal, useRef, forwardRef -> useImperativeHandle

- ==usePortal==: to render component in another place (not root). useful to render Modal, Toast.

| State                                                                           | Refs                                                                                                          |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Causes component re-evaluation (re-execution) when changed                      | Do not cause component re-execution when changed                                                              |
| Should be used for values that are directly reflected in the UI                 | Can be used to gain direct DOM element access (-> great for reading values or accessing certain browser APIs) |
| Should not be used for "behind the scenes" values that have no direct UI impact |                                                                                                               |

- **useImperativeHandle** is a React Hook that lets you customize the handle exposed as a **ref**.

> [!Warning] Pitfall
> **Do not overuse refs.** You should only use refs for _imperative_ behaviors that you can’t express as props: for example, scrolling to a node, focusing a node, triggering an animation, selecting text, and so on.
>
> **If you can express something as a prop, you should not use a ref.** For example, instead of exposing an imperative handle like `{ open, close }` from a `Modal` component, it is better to take `isOpen` as a prop like `<Modal isOpen={isOpen} />`. [Effects](https://react.dev/learn/synchronizing-with-effects) can help you expose imperative behaviors via props.

# 5. useReducer()

## 5.1 What's a 'Reducer':

1. A function that reduce one or more **complex values** to a **simpler one**.
2. useReducer(): Trong React useState() Hook không phải là Hook duy nhất để quản lý trạng thái, useReducer() cũng được sử dụng cho mục đích tương tự. useReducer() tốt hơn useState() khi chúng ta muốn quản lý các trạng thái thành phần phức tạp hơn.

- Cú pháp:
  - `reducer(currentState, action)`
  - `useReducer(reducer, initialState)`
- **reducer**: là một hàm chấp nhập trạng thái hiện tại (currentState) và hành động (action), sau đó trả về một trạng thái mới dựa trên hành động đó.
- **currentState**: xác định trạng thái hiện tại của thành phần.
- **action**: là hành động được thực hiện bởi người dùng. Nó có thể là bất cứ kiểu dữ liệu nào.
- **useReducer**: Hook trả về currentState và phương thức điều phối (dispatch): [currentState, dispatch].
- **initialState**: xác định trạng thái ban đầu của thành phần.
- **dispatch**: phương thức điều phối có khả năng chấp nhận một hành động để thực thi mã được chỉ định trong hàm kết xuất, tức là nó chấp nhận hành động đó và chuyển nó đến hàm giảm thiểu. Để sử dụng useReducer() hook chúng ta hãy tạo hàm Reducer() và khởi tạo một initialState.

# 6. Optimization & Control behavior

## 6.1 React.memo

- **Purpose:** Memoizes a functional component to prevent unnecessary renders.
- **How it works:** It compares the previous and current props, and if they are the same, it prevents the re-render of the component.
- **Use Case:** Ideal for optimizing functional components that are pure, i.e., their output is solely determined by their props.

```jsx
const MyComponent = React.memo((props) => { // Component logic here });
```

- React.memo là một thành phần bậc cao bao bọc xung quanh function component, nó sẽ kiểm tra sự thay đổi của props để quyết định re-execute component đó hay không.
- DON'T OVERUSE ==memo()==:
  - Use is **as high up in the component tree as possible** -> blocking a component execution there will also block all child component executions.
  - Checking props with memo() **costs performance!** -> don't wrap it around all your components - it will just add a lot of unnecessary checks.
  - **Don't** use it on components where **props will change frequently** -> memo() would just preform a meaningless check in such cases (which costs performance).

## 6.2 useMemo

- **Purpose:** Memoizes the result of a computation to prevent it from being recomputed on each render.
- **How it works:** Returns a memoized value that only changes if one of the dependencies has changed.
- **Use Case:** Useful for expensive calculations or data transformations to optimize performance.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

## 6.3 useCallback

- **Purpose:** Memoizes a callback function to prevent it from being recreated on each render.
- **How it works:** Returns a memoized version of the callback that only changes if one of the dependencies has changed.
- **Use Case:** Useful when passing callbacks to child components to prevent unnecessary re-renders caused by new function references.

```jsx
const myCallback = useCallback(() => {
  // Callback logic here
}, [dependency1, dependency2])
```

In summary:

- Use `React.memo` to memoize entire components based on prop changes.
- Use `useCallback` to memoize callback functions, particularly when passing them as props to child components.
- Use `useMemo` to memoize the result of expensive computations or data transformations.

Note: It's important to use these optimizations judiciously, as overusing them can lead to code complexity and potential performance issues. Always profile and measure the actual impact on your application's performance.

# 7. Class-based Component

```js
class Header {
  construtor() {
    super()
    // Has to be a property named 'state'
    this.state = {
      showToast: true,
      moreState: 'vu',
    } // state will always is an object
  }

  toggleToastHandler() {
    // React will behind the scenes merge the object youre passing here.
    // And old property would be capped.
    this.setState((prevState) => {
      return { showToast: !prevState.showToast }
    })
  }

  render() {
    // You can define helper function in here
    return (
      <button onClick={this.toggleToastHandler.bind(this)}>
        {this.state.showToast ? 'Show' : 'Hide'}
      </button>
    )
  }
}

export default Header
```

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: **Mounting**, **Updating**, and **Unmounting**.

- Mounting -> componentDidMount() happen after component mounted to the DOM ---> useEffect(..., [])
- Updating -> componentDidUpdate() happen when component updated state ---> useEffect(..., [someState])
- Unmounting -> componentWillUnmount() happen when component be removed from DOM

```js
useEffect(() => { return () => { ... }}, [])
```

# 8. Custom Hook

> [!tip] Re-useable logic code

## 8.1 React Hook Rules

1. Only call Hooks **inside of Component Functions**
2. Only call Hooks **on the top level**

# 9. Form & User input

## 9.1 Form Submission

- Handling submission is relatively **easy**
- Entered values can be managed via **state**
- Alternatively, they can be extracted via **refs**
- Or via **FormData** and native browser features

## 9.2 Input Validation

- Providing a good user experience is **tricky**
- You can **validate** on every **keystroke** -> errors may be shown **too early**
- You can **validate** on **lost focus (onBlur)** -> errors may be shown **too long**
- You can **validate** on **form submission** -> errors may be shown **too late**

# 10. Redux / Redux Toolkit

- Store (createStore, configureStore => reducer: {})
- Reducer (initialState, actions) / createSlice
- Dispatch
- useSelector

Reducers must be ==pure, side-effect free, synchronous== functions !

**Where should side-effects & async tasks be executed ?**

1. Inside the **components** (e.g., via useEffect())
2. Inside the **action creators**
   ![[redux-async.png]]
   **What is a 'Thunk' ?**

- A function that **delays an action** until later -> An action creator that does **Not return that action itself** but instead **another function** which **eventually** returns the action

# 11. Routing

> [!info] Info
> Different URL paths load different content on the screen.
