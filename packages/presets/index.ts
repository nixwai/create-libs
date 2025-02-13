import type { Theme } from '@unocss/preset-mini';
import type { PresetOptions } from './types';
import { definePreset } from 'unocss';

export const presetMortiseTenon = definePreset<PresetOptions, Theme>((_options) => {
  return { name: 'unocss-preset' };
});

export * from './types';
