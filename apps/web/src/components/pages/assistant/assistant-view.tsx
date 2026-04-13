import { Card } from "../../ui/card";
import { ChatUI } from "../../features/chat-ui";
import { Tag } from "../../ui/tag";

export function AssistantView() {
  return (
    <section className="assistant-layout" aria-labelledby="assistant-title">
      <div className="assistant-layout__intro">
        <div className="label">AI Assistant</div>
        <h3 id="assistant-title" className="assistant-layout__title">Chat-first layout with suggestions and response context.</h3>
        <p className="assistant-layout__meta">
          The main message surface is larger here, with supporting chips and quick actions around it.
        </p>
      </div>

      <div className="assistant-layout__body">
        <ChatUI />

        <Card className="assistant-layout__rail">
          <div className="label">Suggested prompts</div>
          <div className="stack-12">
            <Tag>Who can help with internships?</Tag>
            <Tag>Show contacts from Amazon</Tag>
            <Tag>Who needs a follow-up?</Tag>
          </div>
        </Card>
      </div>
    </section>
  );
}
