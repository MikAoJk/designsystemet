import {
  InlineButton,
  getInlineButtonPositionDefault,
} from '@skatteetaten/ds-buttons';
import { getCommonDisabledDefault } from '@skatteetaten/ds-core-utils';
import {
  AddOutlineSVGpath,
  BellSVGpath,
  ChatbotSVGpath,
} from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category, storyDefault } from '../../.storybook/helpers';
import './classnames.stories.css';

// TODO FRONT-893 - legge på figma-lenker
// TODO FRONT-893 - komplett list med ikoner
const iconList = {
  AddOutline: { svgPath: AddOutlineSVGpath },
  Bell: { svgPath: BellSVGpath },
  Chatbot: { svgPath: ChatbotSVGpath },
};

export default {
  component: InlineButton,
  title: 'Design System / InlineButton',
  argTypes: {
    accessKey: {
      control: 'text',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: '' },
      },
    },
    ariaDescribedby: { table: { category: category.aria } },
    id: { ...storyDefault.id },
    key: { ...storyDefault.key },
    onClick: { ...storyDefault.onEvent },
    onFocus: { ...storyDefault.onEvent },
    onBlur: { ...storyDefault.onEvent },
    children: { table: { category: category.props } },
    className: { ...storyDefault.className },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonDisabledDefault() },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      table: {
        category: category.props,
        defaultValue: { summary: getInlineButtonPositionDefault() },
      },
    },
    ref: { ...storyDefault.ref },
    svgPath: {
      options: [''].concat(Object.keys(iconList)),
      control: 'select',
      mapping: iconList,
      table: { category: category.props },
    },
    tabIndex: { table: { category: category.htmlAttribute } },
  },
} as ComponentMeta<typeof InlineButton>;

const TemplateDefault: ComponentStory<typeof InlineButton> = (args) => (
  <InlineButton {...args} onClick={action('klikkEvent InlineButton')}>
    {args.children}
  </InlineButton>
);

const baseArgs = {
  children: 'Legg til rapport',
};

export const InlineButtonDefault = TemplateDefault.bind({});
InlineButtonDefault.storyName = 'Default';
InlineButtonDefault.args = {
  ...baseArgs,
};

export const InlineButtonIcon = TemplateDefault.bind({});
InlineButtonIcon.storyName = 'With icon';
InlineButtonIcon.args = {
  ...baseArgs,
  svgPath: AddOutlineSVGpath,
};
