
import './App.css'
import * as Stack from '@react-motion-router/stack';
import Home from './Screens/Home';
import { handleDownload } from './common/utils';

function App() {

  return (
    <Stack.Router config={{
      shouldIntercept(e) {
        return Boolean(e.downloadRequest);
      },
      onIntercept: handleDownload
    }}>
      <Stack.Screen path="*" component={Home} />
    </Stack.Router>
  );
}

export default App
