import * as path from 'path';
// const path = require("path");
import initStoryshots, {multiSnapshotWithOptions} from '@storybook/addon-storyshots';
// import { shallow } from 'enzyme';

initStoryshots({
  framework: 'angular',
  configPath: path.join(__dirname, '../.storybook'),
  test: multiSnapshotWithOptions({}),
});
