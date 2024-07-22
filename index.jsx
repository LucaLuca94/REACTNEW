
import { createRoot} from "react-dom/client"
const helloWorldElement = <helloWorld />;
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(helloWorldElement)