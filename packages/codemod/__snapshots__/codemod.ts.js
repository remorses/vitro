exports['storiesofTransformer with stories.add 1'] = `
import React from 'react';
import Button from './Button';

import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export const Story1 = () => <Button label="Story 1" />;
export const _Story1 = () => <Button label="Story 1" />;
export const SecondStory = () => <Button label="Story 2" onClick={action('click')} />;
`

exports['storiesofTransformer 1'] = `
/* eslint-disable */
import React from 'react';
import Button from './Button';

import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
};

export const Story1 = () => <Button label="Story 1" />;
export const SecondStory = () => <Button label="Story 2" onClick={action('click')} />;

export const ComplexStory = () => (
  <div>
    <Button label="The Button" onClick={action('onClick')} />
    <br />
  </div>
);

export const WPunctuation = () => <Button label="Story 2" onClick={action('click')} />;
export const StartCase = () => <Button label="Story 2" onClick={action('click')} />;
`

exports['runMigrateCodemod 1'] = `
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import FlexCenter from './FlexCenter';
import { specs, urls } from './LiveView.stories';
import { ignoredRegions } from './IgnoredRegions.stories';

export { specs, urls, ignoredRegions };

export default {
  title: 'FlexCenter',
  excludeStories: ['specs', 'urls', 'ignoredRegions'],
};

export const _21 = () => (
  <FlexCenter width={200} height={100} style={{ background: 'papayawhip' }}>
    <div style={{ padding: 30, background: 'hotpink' }}>2:1</div>
  </FlexCenter>
);
`

exports['storiesofTransformer already existing export default 1'] = `
import React from 'react';
import Button from './Button';

import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'xxx',
};

export const Story1 = () => <Button label="Story 1" />;
export const _Story1 = () => <Button label="Story 1" />;
export const SecondStory = () => <Button label="Story 2" onClick={action('click')} />;
`

exports['storiesofTransformer with multiple storiesOf 1'] = `
import React from 'react';
    import Button from './Button';

    import { configure } from '@storybook/react';
    import { action } from '@storybook/addon-actions';

    export default {
      title: 'A',
    };

    export const Story1 = () => <Button label="Story 1" />;
    export const _Story1 = () => <Button label="Story 1" />;
    export const SecondStory = () => <Button label="Story 2" onClick={action('click')} />;
`
