import { AppShell } from "../../components/layout/app-shell";
import { Topbar } from "../../components/layout/topbar";
import { AssistantView } from "../../components/pages/assistant/assistant-view";

export default function AssistantPage() {
  return (
    <AppShell activeNav="assistant">
      <Topbar
        label="AI Assistant"
        title="Chat-driven layout with supportive prompt rails."
        description="Conversation becomes the primary interaction pattern while suggestions stay secondary."
      />
      <AssistantView />
    </AppShell>
  );
}
