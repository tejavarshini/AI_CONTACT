import { Card } from "../../ui/card";
import { ChatUI } from "../../features/chat-ui";
import { Tag } from "../../ui/tag";

export function AssistantView() {
  return (
    <section className="assistant-layout" aria-labelledby="assistant-title">
      <div className="assistant-layout__intro">
        <div className="label">Ask for suggestions</div>
        <h3 id="assistant-title" className="assistant-layout__title">Ask who can help you</h3>
        <p className="assistant-layout__meta">
          Type a question and we will suggest the right people.
        </p>
      </div>

      <div className="assistant-layout__body">
        <ChatUI />

        <Card className="assistant-layout__rail">
          <div className="label">Suggested prompts</div>
          <div className="stack-12">
            <Tag>Who can help with internships?</Tag>
            <Tag>Show people from Amazon</Tag>
            <Tag>Who should I reconnect with?</Tag>
          </div>
        </Card>
      </div>
    </section>
  );
}
