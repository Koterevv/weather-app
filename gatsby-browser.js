import "./src/styles/global.css"
// import { Provider } from "react-redux"
// import { store } from "./src/store"
import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

// exports.wrapRootElement = ({ element }) => {
//   return (
//     <Provider store={store}>
//       {element}
//     </Provider>
//   )
// }
