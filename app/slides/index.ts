import type { ComponentType } from 'react';
import { Slide01Title } from '../components/slides/Slide01Title';
import { Slide03Profile } from '../components/slides/Slide03Profile';
import { Slide04Lab } from '../components/slides/Slide04Lab';
import { Slide05HobbyA } from '../components/slides/Slide05HobbyA';
import { Slide06HobbyB } from '../components/slides/Slide06HobbyB';
import { Slide08WorkHistory } from '../components/slides/Slide08WorkHistory';
import { Slide09Training } from '../components/slides/Slide09Training';
import { Slide10Stnet } from '../components/slides/Slide10Stnet';
import { Slide11BenesseIntro } from '../components/slides/Slide11BenesseIntro';
import { Slide12ServiceAdjust } from '../components/slides/Slide12ServiceAdjust';
import { Slide14Ownership } from '../components/slides/Slide14Ownership';
import { Slide15Challenges } from '../components/slides/Slide15Challenges';
import { Slide16Summary } from '../components/slides/Slide16Summary';
import { Slide17Future } from '../components/slides/Slide17Future';
import { Slide18Closing } from '../components/slides/Slide18Closing';

export type SlideDefinition = {
  id: string;
  component: ComponentType;
};

export const slides: SlideDefinition[] = [
  { id: 'title', component: Slide01Title },
  { id: 'profile', component: Slide03Profile },
  { id: 'lab', component: Slide04Lab },
  { id: 'hobby-1', component: Slide05HobbyA },
  { id: 'hobby-2', component: Slide06HobbyB },
  { id: 'work-history', component: Slide08WorkHistory },
  { id: 'training', component: Slide09Training },
  { id: 'stnet', component: Slide10Stnet },
  { id: 'benesse-intro', component: Slide11BenesseIntro },
  { id: 'service-adjust', component: Slide12ServiceAdjust },
  { id: 'ownership', component: Slide14Ownership },
  { id: 'challenges', component: Slide15Challenges },
  { id: 'summary', component: Slide16Summary },
  { id: 'future', component: Slide17Future },
  { id: 'closing', component: Slide18Closing },
];
