import { createTemplate, createStory } from '../../stories/utils';
import Skeleton from './Skeleton';


export default {
	title: 'Core/Skeleton',
	component: Skeleton,
}

const Template = createTemplate(Skeleton);
export const Default = createStory(Template, {
  // children: 'Button Title',<Skeleton variant="rectangular" height={1} />
  variant: "rectangular",
  // size: "default",
  // shape: "default",
  // ghost: false,
  // block: false,
});
