exports['storiesofTransformer with stories.add 1'] = `
import React from 'react';
import Button from './Button';

import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export const Story1 = () => <Button label="Story 1" />;
export const _Story1 = () => <Button label="Story 1" />;
export const SecondStory = () => <Button label="Story 2" onClick={action('click')} />;
`
