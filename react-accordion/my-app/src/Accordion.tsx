import { TopicCard } from './TopicCard';
import { useState } from 'react';
import './TopicCard.css';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [activeTopicId, setActiveTopicId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveTopicId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="accordion-container">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isActive={topic.id === activeTopicId}
          onToggle={() => handleToggle(topic.id)}
        />
      ))}
    </div>
  );
}
