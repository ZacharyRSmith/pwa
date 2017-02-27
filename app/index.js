import _ from 'lodash';
import offlinePluginRuntime from 'offline-plugin/runtime';

offlinePluginRuntime.install({
  onInstalled: () => console.log('hi')
});

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
