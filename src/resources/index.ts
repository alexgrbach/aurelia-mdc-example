import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources(
    [
      PLATFORM.moduleName('./elements/input/text-input/text-input'),
      // PLATFORM.moduleName('./elements/input/text-input/text-input-test'),
      // PLATFORM.moduleName('./elements/input/text-input/textfield-filled-wrapper'),
    ]
  );
}
