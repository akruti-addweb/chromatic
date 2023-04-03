import { createHeader } from './Header';

export default {
  title: 'Example/Header',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => createHeader(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Akruti Patel',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

LoggedIn.parameters = {
  // Set the viewports in Chromatic at a story level.
  chromatic: { viewports: [360, 1200] , disableSnapshot: false },
};

LoggedOut.parameters = {
  // Set the viewports in Chromatic at a story level.
  chromatic: { viewports: [360, 1200] , disableSnapshot: false , diffThreshold: 1 , diffIncludeAntiAliasing: true},
};