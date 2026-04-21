import type { SlideContent } from '../types/slide';

export const slide05: SlideContent = {
  id: 'hobby-1',
  layoutGroup: 'hobby-flow',
  title: '趣味：絵を描くこと',
  subtitle: '制作活動の流れ',
  minutes: '2分',
  cards: [
    { heading: '小学生', text: '２年生から６年生まで画塾に通う' },
    { heading: '中学生', text: '美術部として３年間活動' },
    { heading: '高校生', text: '文化委員会の委員長として活動' },
  ],
  placeholders: [
    {
      label: '高校文化祭 立て看板',
      imageSrc: '/images/tatekanban.jpg',
      imageAlt: '高校文化祭 立て看板',
    },
    {
      label: '高校文化祭 テーマソングMV',
      imageSrc: '/images/MVgif.gif',
      imageAlt: '高校文化祭 テーマソングMV',
    },
  ],
  placeholderLayout: 'single',
};
