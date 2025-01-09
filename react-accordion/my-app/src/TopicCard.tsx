import './TopicCard.css';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topic: Topic;
  isActive: boolean;
  onToggle: () => void;
};

export function TopicCard({ topic, isActive, onToggle }: Props) {
  return (
    <div className="topic-card">
      <div className="topic-header" onClick={onToggle}>
        {topic.title}
      </div>
      {isActive && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}
