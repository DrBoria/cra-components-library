### Containers:

```jsx
import { ThemeProvider } from 'styled-components';
import { dark } from 'styles/themes';

import { PageContainer, BasicSection, HeadingContainer } from 'components/Containers';
import { PlainText, SectionTitle } from 'components/Typography';

<PageContainer>
  <BasicSection>
    <SectionTitle>Light theme</SectionTitle>
    <PlainText>Page container got offset from top for header</PlainText>
  </BasicSection>

  <ThemeProvider theme={{ colors: dark }}>
    <BasicSection>
      <HeadingContainer>
        <SectionTitle offsetBottom>Dark theme</SectionTitle>
        <PlainText>Basic section + heading container usage</PlainText>
      </HeadingContainer>
    </BasicSection>
  </ThemeProvider>
</PageContainer>;
```
