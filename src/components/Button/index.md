```jsx
import { ThemeProvider } from 'styled-components';
import Button from 'components/Button';
import { dark } from 'styles/themes';
<>
  Light Theme
  <div style={{ width: '100%', padding: '10px' }}>
    <Button>Navigation Button</Button>
    <Button type='menu'>Menu Button</Button>
  </div>
  Dark theme
  <ThemeProvider theme={{ colors: dark }}>
    <div style={{ width: '100%', padding: '10px', backgroundColor: 'black' }}>
      <Button>Navigation Button</Button>
      <Button type='menu'>Menu Button</Button>
    </div>
  </ThemeProvider>
</>;
```
