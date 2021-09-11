import { configure } from '@storybook/react';

function loadStories() {
  require('../src/storybook/inputStory')
}

configure(loadStories, module);
