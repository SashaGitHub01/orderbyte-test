import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyles } from "./styles/GlobalStyles.styles";
import theme from "./styles/theme.styles";
import { ThemeProvider } from "styled-components";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Todos />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
