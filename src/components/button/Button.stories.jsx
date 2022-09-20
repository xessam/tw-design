import { createTemplate, createStory } from '../../stories/utils';
import Button from './Button';


export default {
	title: 'Core/Button',
	component: Button,
}

const Template = createTemplate(Button);
export const Default = createStory(Template, {
  children: 'Button Title',
  type: "primary",
  size: "default",
  shape: "default",
  ghost: false,
  block: false,
});
